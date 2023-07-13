// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuLq4Dm2SaS9nm9oe9uVqiEeErPs8Svz0",
  authDomain: "todo-app-fb4a9.firebaseapp.com",
  projectId: "todo-app-fb4a9",
  storageBucket: "todo-app-fb4a9.appspot.com",
  messagingSenderId: "867802122209",
  appId: "1:867802122209:web:6bcfb11f7496b7732474a0",
  measurementId: "G-060V3XKGEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)