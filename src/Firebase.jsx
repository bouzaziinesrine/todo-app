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
  apiKey: "AIzaSyCc-TbhnFO8nawVyrPA6xEzGgXXzSWfEnU",
  authDomain: "todo-eadf4.firebaseapp.com",
  projectId: "todo-eadf4",
  storageBucket: "todo-eadf4.appspot.com",
  messagingSenderId: "80864763927",
  appId: "1:80864763927:web:a00479a29ddac5dbce7c52"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)