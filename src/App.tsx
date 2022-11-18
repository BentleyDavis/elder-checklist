import './App.css';
import 'survey-core/modern.min.css';
import { useEffect, useRef, useState } from 'react';
import { StylesManager, Model } from 'survey-core'
import { Survey } from 'survey-react-ui';
import { surveyFormat } from './surveyFormat';
import { firebaseApp, firebaseInit } from './database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, User } from 'firebase/auth';
import { doc, getDoc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { newId } from './newId';

// import { debounce } from "lodash";
// const debouncers: any = {};
// let userAccessToken: string | undefined;

StylesManager.applyTheme("modern");

function getSurveyDateId() {
  const date = new Date();
  return date.getFullYear().toString() +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    date.getDate().toString().padStart(2, "0")
}

surveyFormat.textUpdateMode = "onTyping" // Force onValueChanged to happen with every keypress so data is not lost
const provider = new GoogleAuthProvider();

function App() {
  const survey = new Model(surveyFormat)
  const [authState, setAuthState] = useState<"in" | "unknown">("unknown")
  const [user, setUser] = useState<User>()
  const [surveyData, setsurveyData] = useState<any>(undefined)
  const dbDocRef = useRef<any>(undefined)
  const uniqueSessionId = useRef(newId())

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
        if (!dbDocRef.current) {

          // create the doc if it doesn't exist
          const docRef = doc(db, "lists", "AL3vE9W4KNpbHaZ03IGp", "submissions", getSurveyDateId());
          dbDocRef.current = docRef;
          if (!(await getDoc(docRef)).exists()) {
            await setDoc(docRef, {})
          }

          const unsub = onSnapshot(docRef, (doc) => {
            const data = doc.data();
            if (data) {
              if (data.updateFrom !== uniqueSessionId.current) {
                setsurveyData(data);
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

  const saveData = async (options: any) => {
    if (dbDocRef.current) {
      await updateDoc(dbDocRef.current, {
        [options.name]: options.value,
        updateFrom: uniqueSessionId.current,
        updated: { [options.name]: options.value }
      });
    }
  }

  const handleSurveyChange = (sender: any, options: any) => {

    //const handleSurveyChange = useCallback((sender: any, options: any) => {
    saveData(options)
    // if (!debouncers[options.name]) {
    //   debouncers[options.name] = debounce((options2) => {
    //     saveData(options2)
    //   }, 1000)
    // }
    // debouncers[options.name](options)
    //}, []);
  }

  survey.onValueChanged.add(handleSurveyChange)

  return (
    <div className="App">
      {authState === "in" && surveyData !== undefined &&
        <>
          <Survey model={survey} data={surveyData} />
          {/* <pre>{JSON.stringify(survey, undefined, 2)}</pre> */}
        </>
      }

      {authState === "unknown" &&
        <h1>Checking login...</h1>
      }
      <span style={{ opacity: .2 }}>
        {user?.displayName}({user?.uid})
      </span>

    </div>
  );
}

export default App;
