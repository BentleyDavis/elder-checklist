import './App.css';
import { useEffect, useReducer, useRef, useState } from 'react';
import { surveyFormat } from './surveyFormat';
import { firebaseApp, firebaseInit } from './database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, User } from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { newId } from './newId';
import Components from "./components/Components";
import { deepCopy, pathCreateObject } from './utils/dataStore';
import { merge } from 'lodash';

const provider = new GoogleAuthProvider();

function getSurveyDateId() {
  const date = new Date();
  return date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0")
}

let dbDocRef: any
const uniqueSessionId = newId()

function App() {
  const [authState, setAuthState] = useState<"in" | "unknown">("unknown")
  const [user, setUser] = useState<User>()
  const [formState, dispatchForm] = useReducer(formStateReducer, undefined)



  useEffect(() => { // Log Into Firebase
    firebaseInit()
    const cancelables: any[] = [];
    const auth = getAuth();
    let unsubscribe = onAuthStateChanged(auth, async (incomingUser) => {
      if (incomingUser) {
        setAuthState("in");
        setUser(incomingUser);

        // Subscribe the survey data
        const db = getFirestore(firebaseApp);
        if (!dbDocRef) {

          // create the doc if it doesn't exist
          const docRef = doc(db, "lists", "AL3vE9W4KNpbHaZ03IGp", "submissions", getSurveyDateId());
          dbDocRef = docRef;
          if (!(await getDoc(docRef)).exists()) {
            await setDoc(docRef, {})
          }

          const unsub = onSnapshot(docRef, (doc) => {
            const data = doc.data();
            if (data) {
              if (data.updateFrom !== uniqueSessionId) {
                dispatchForm({ path: "", data })
              } else {
              }
            }
          });

          cancelables.push(unsub)
        }

      } else {
        const auth = getAuth();
        signInWithRedirect(auth, provider).catch((error) => { console.error(error) });
      }
    });

    cancelables.push(unsubscribe)

    return () => {
      for (const c of cancelables) {
        c()
      }
    }
  }, [])

  function formStateReducer(oldState: any, action: { path: string, data: any }) {

    // Update Remotre State
    if (dbDocRef && action.path !== "") {
      updateDoc(dbDocRef, {
        [action.path]: action.data,
        updateFrom: uniqueSessionId,
        updated: { [action.path]: action.data }
      });
    }


    // Update local state
    let partial = action.data;
    if (action.path !== "") {
      partial = pathCreateObject(action.path, action.data)
    }
    return merge(deepCopy(oldState), deepCopy(partial));
  }

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(formState, undefined, 2)}</pre> */}
      {/* <pre>{JSON.stringify(surveyData, undefined, 2)}</pre> */}


      {authState === "in" && formState !== undefined &&
        <>
          {surveyFormat.elements.map((e: any) => { return Components(e, formState, dispatchForm) })}
        </>
      }

      {authState === "unknown" &&
        <h1>Checking login...</h1>
      }
      {/* <span style={{ opacity: .2 }}>
        {user?.displayName}
        ({user?.uid})
      </span> */}

    </div>
  );
}

export default App;
