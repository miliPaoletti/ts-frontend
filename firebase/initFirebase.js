import { getFirestore } from "firebase/firestore";

import { getApp, initializeApp } from "firebase/app";

function createFirebaseApp(config) {
  try {
    return getApp("[DEFAULT]");
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(
  JSON.parse(process.env.FIREBASE_CREDENTIALS_DEV)
);

export const database = getFirestore(firebaseApp);
