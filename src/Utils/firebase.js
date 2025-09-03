// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiFT-R2qH0IPDIYOKiHO7Rdkf-teulXbo",
  authDomain: "netflixgpt-f3ce0.firebaseapp.com",
  projectId: "netflixgpt-f3ce0",
  storageBucket: "netflixgpt-f3ce0.firebasestorage.app",
  messagingSenderId: "780694784711",
  appId: "1:780694784711:web:1f250b81785ee8e4234ce2",
  measurementId: "G-E3Z7E9S79S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

 export const auth = getAuth();
