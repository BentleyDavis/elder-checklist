import { getAuth, GoogleAuthProvider, User, OAuthCredential, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useEffect, useState } from "react";
import { firebaseInit } from "./database"

const provider = new GoogleAuthProvider();

export let accessToken: string | undefined;
export let user: User | undefined;
export let credential: OAuthCredential | undefined;


export default function Auth({ children }: { children: any }) {
    const [authState, setAuthState] = useState<"in" | "unknown">("unknown")
    const [user, setUser] = useState<User>()

    useEffect(() => {
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
                            accessToken = credential.accessToken;
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


    return (
        <>
            {authState === "in" &&
                React.Children.map(children, i => { return i; })
            }

            {authState === "unknown" &&
                <h1>Checking login...</h1>
            }

            <span style={{ opacity: .2 }}>
                {user?.displayName}({user?.uid})
            </span>

        </>
    );
}