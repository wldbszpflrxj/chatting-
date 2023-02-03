 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "chat-b329a.firebaseapp.com",
  projectId: "chat-b329a",
  storageBucket: "chat-b329a.appspot.com",
  messagingSenderId: "21115487653",
  appId: "1:21115487653:web:cff45a9465192a0e0ed44c",
  measurementId: "G-SWG9B5YG3K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);