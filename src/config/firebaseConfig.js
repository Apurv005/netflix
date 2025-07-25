// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB2LCPL0P87rLcULmW5OeIxJTUmaOllo8",
  authDomain: "netflix-61464.firebaseapp.com",
  projectId: "netflix-61464",
  storageBucket: "netflix-61464.firebasestorage.app",
  messagingSenderId: "739630368548",
  appId: "1:739630368548:web:0e775e388e110e4b6dd5b1",
  measurementId: "G-3Q1H5M7PWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
