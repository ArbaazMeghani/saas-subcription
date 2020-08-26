import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};


const initializeFirebase = () => {
  try {
    firebase.initializeApp(firebaseConfig);
    if (process.env.NODE_ENV !== 'production') {
      firebase.functions().useFunctionsEmulator('http://localhost:5001');
    }
  } catch(err) {
    console.log(err.message)
  }
}

export default initializeFirebase;