// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSEgmco8CMIiqbidXR8882MnOGN3gTsOU",
  authDomain: "netflix-clone-7153d.firebaseapp.com",
  projectId: "netflix-clone-7153d",
  storageBucket: "netflix-clone-7153d.appspot.com",
  messagingSenderId: "643091269867",
  appId: "1:643091269867:web:17eecceb1d3c3e4b0796ae",
  measurementId: "G-Q3JF0Q27K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();