import { getFirestore } from "firebase/firestore";

import { getApp, initializeApp } from "firebase/app";

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

export const database = getFirestore(firebaseApp);