// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUHJLvGFtQd5Xwq4z0L4CkOUTmYyioGnA",
  authDomain: "fir-authapp-348ae.firebaseapp.com",
  projectId: "fir-authapp-348ae",
  storageBucket: "fir-authapp-348ae.firebasestorage.app",
  messagingSenderId: "239767462151",
  appId: "1:239767462151:web:648ac0d0ba0802ce9165a2"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore (FIREBASE_APP);