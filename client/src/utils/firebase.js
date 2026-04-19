// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-bbcee.firebaseapp.com",
  projectId: "authexamnotes-bbcee",
  storageBucket: "authexamnotes-bbcee.firebasestorage.app",
  messagingSenderId: "309792972694",
  appId: "1:309792972694:web:dff348aedc505d425a07b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

