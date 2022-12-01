import './App.css';
import { useEffect, useReducer, useState } from 'react';
import { surveyFormat } from './surveyFormat';
import { firebaseApp, firebaseInit } from './utils/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { newId } from './utils/newId';
import Components from "./components/Components";
import { deepCopy, pathCreateObject } from './utils/dataStore';
import { merge } from 'lodash';

import './components/tasks.css';
import { getDateId } from './utils/getTodaysDateId';

const provider = new GoogleAuthProvider();

let dbDocRef: any
const uniqueSessionId = newId()

function App() {
  const [authState, setAuthState] = useState<"in" | "unknown">("unknown")
  // const [user, setUser] = useState<User>()
  const [formState, dispatchForm] = useReducer(formStateReducer, undefined)

  useEffect(() => { // Log Into Firebase
    firebaseInit()
    const cancelables: any[] = [];
    const auth = getAuth();
    let unsubscribe = onAuthStateChanged(auth, async (incomingUser) => {
      if (incomingUser) {
        setAuthState("in");
        // setUser(incomingUser);

        // Subscribe the survey data
        const db = getFirestore(firebaseApp);
        if (!dbDocRef) {

          // create the doc if it doesn't exist
          const docRef = doc(db, "lists", "AL3vE9W4KNpbHaZ03IGp", "submissions", getDateId());
          dbDocRef = docRef;
          if (!(await getDoc(docRef)).exists()) {
            await setDoc(docRef, {})
          }

          const unsub = onSnapshot(docRef, (doc) => {
            const data = doc.data();
            if (data) {
              if (data.updateFrom !== uniqueSessionId) {
                // console.log("initialData:", data);
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

    if (dbDocRef && action.path !== "") {

      // Update Remote State
      updateDoc(dbDocRef, {
        [action.path]: action.data,
        updateFrom: uniqueSessionId,
        updated: { [action.path]: action.data }
      });

      // Update messages

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
          <br />
          <br />
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
