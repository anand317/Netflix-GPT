// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdTn4ICFtt6RMf0FEBfxpSD_nD__cWGTQ",
  authDomain: "newnetflix-3b2af.firebaseapp.com",
  projectId: "newnetflix-3b2af",
  storageBucket: "newnetflix-3b2af.appspot.com",
  messagingSenderId: "207507018993",
  appId: "1:207507018993:web:ad74be0936a4ad677a0550",
  measurementId: "G-3RQSHRW2TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();