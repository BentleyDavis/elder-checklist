import React, { useCallback, useEffect, useState } from 'react';
import './App.css';

import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core'
import { Survey } from 'survey-react-ui';
import { debounce } from "lodash";
import { surveyFormat } from './surveyFormat';
import { firebaseInit } from './database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, User } from 'firebase/auth';

StylesManager.applyTheme("modern");

const saveData = (options: any) => {
  console.log(options.name, options.value)
}

surveyFormat.textUpdateMode = "onTyping" // Force onValueChanged to happen with every keypress so data is not lost
const debouncers: any = {};
const provider = new GoogleAuthProvider();
let userAccessToken: string | undefined;

function App() {
  const survey = new Model(surveyFormat)
  const [authState, setAuthState] = useState<"in" | "unknown">("unknown")
  const [user, setUser] = useState<User>()

  useEffect(() => { // Log Into Firebase
    firebaseInit()
    const auth = getAuth();
    let unsubscribe = onAuthStateChanged(auth, (incomingUser) => {
      if (incomingUser) {
        setAuthState("in");
        setUser(incomingUser);
      } else {
        const auth = getAuth();
        signInWithRedirect(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential) {
              userAccessToken = credential.accessToken;
            }
            // ...
          }).catch((error) => {
            console.error(error)
          });
      }
    });

    return () => {
      unsubscribe()
    }
  }, [])

  const handleSurveyChange = useCallback((sender: any, options: any) => {
    if (!debouncers[options.name]) {
      debouncers[options.name] = debounce((options2) => {
        saveData(options2)
      }, 1000)
    }
    debouncers[options.name](options)
  }, []);

  survey.onValueChanged.add(handleSurveyChange)

  return (
    <div className="App">
      {authState === "in" &&
        <>
          <Survey model={survey} />
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
