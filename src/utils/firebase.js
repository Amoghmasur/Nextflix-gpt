// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYP9G3eR82RFs_aIK0Lxbg8GLRdgjBXvI",
  authDomain: "netflix-gpt-f5d18.firebaseapp.com",
  projectId: "netflix-gpt-f5d18",
  storageBucket: "netflix-gpt-f5d18.appspot.com",
  messagingSenderId: "439737988591",
  appId: "1:439737988591:web:42e271ae13cc8f303af21a",
  measurementId: "G-R0G81CPC6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
