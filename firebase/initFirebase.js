import {
  enableMultiTabIndexedDbPersistence,
  getFirestore,
} from "firebase/firestore";

import { getApp, getApps, initializeApp } from "firebase/app";

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

function initializeServices() {
  const isConfigured = getApps().length > 0;

  const firebaseConfig = JSON.parse(
    process.env.NEXT_PUBLIC_FIREBASE_CREDENTIALS
  );

  const firebaseApp = createFirebaseApp(firebaseConfig);
  const database = getFirestore(firebaseApp);

  return { firebaseApp, database, isConfigured };
}

export function getFirebase() {
  const services = initializeServices();
  if (!services.isConfigured) {
    if (typeof window !== "undefined") {
      enableMultiTabIndexedDbPersistence(services.database).catch(function (
        err
      ) {
        if (err.code == "failed-precondition") {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
          console.log(err.code);
        } else if (err.code == "unimplemented") {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
          console.log(err.code);
        }
      });
    }
  }
  return services;
}
