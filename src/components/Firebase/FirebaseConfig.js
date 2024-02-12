// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyDtDhXqCW9l0ShWDfQfQO_epphaaCeBqWM",
  authDomain: "marvel-quiz-f165e.firebaseapp.com",
  projectId: "marvel-quiz-f165e",
  storageBucket: "marvel-quiz-f165e.appspot.com",
  messagingSenderId: "147304548307",
  appId: "1:147304548307:web:7c4eb16c859e698e85d126"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig); 
export const auth = getAuth(app)


export default app;