// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj_26r2NBDgdbPtYr8B-wlHQl1HhgMT_Y",
  authDomain: "e-comercedb.firebaseapp.com",
  projectId: "e-comercedb",
  storageBucket: "e-comercedb.appspot.com",
  messagingSenderId: "144329353605",
  appId: "1:144329353605:web:81cbf1875d729968ea7cec",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
