// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVhjA638Ubx31XLyawE0t5KajDCKQKSvg",
  authDomain: "netflixgpt-6b463.firebaseapp.com",
  projectId: "netflixgpt-6b463",
  storageBucket: "netflixgpt-6b463.firebasestorage.app",
  messagingSenderId: "679781810524",
  appId: "1:679781810524:web:769ef9e47dd2fc627a4199",
  measurementId: "G-C79RBEHMZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();