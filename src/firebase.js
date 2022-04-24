// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXkGbYyCVY5nm386NikR7gZSAXnwSckpg",
  authDomain: "fir-app-7b101.firebaseapp.com",
  projectId: "fir-app-7b101",
  storageBucket: "fir-app-7b101.appspot.com",
  messagingSenderId: "1064612810438",
  appId: "1:1064612810438:web:02e392dc271842b120d1c7",
  measurementId: "G-GZXG27RWPG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)