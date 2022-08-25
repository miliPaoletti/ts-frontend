import { getFirestore } from "firebase/firestore";

import { getApp, initializeApp } from "firebase/app";

import { getAuth, signInAnonymously } from "firebase/auth";

function createFirebaseApp(config) {
  try {
    return getApp("[DEFAULT]");
  } catch {
    return initializeApp(config);
  }
}

let firebaseApp;
if (process.env.NEXT_PUBLIC_FIREBASE_CREDENTIALS !== undefined) {
  firebaseApp = createFirebaseApp(
    JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CREDENTIALS)
    // FIREBASE_CREDENTIALS
  );
}

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

export const database = getFirestore(firebaseApp);
