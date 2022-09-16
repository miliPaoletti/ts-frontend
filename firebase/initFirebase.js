import {
  enableMultiTabIndexedDbPersistence,
  getFirestore,
} from "firebase/firestore";

import { getApps, initializeApp } from "firebase/app";

import { getAuth, signInAnonymously } from "firebase/auth";

function initializeServices() {
  const isConfigured = getApps().length > 0;

  const firebaseApp = initializeApp(
    JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CREDENTIALS)
  );

  const database = getFirestore(firebaseApp);

  const auth = getAuth();
  signInAnonymously(auth)
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error");
      console.log(error);
      // ...
    });

  return { firebaseApp, database, auth, isConfigured };
}

export function getFirebase() {
  const services = initializeServices();
  if (!services.isConfigured) {
    enableMultiTabIndexedDbPersistence(services.database);
  }
  return services;
}
