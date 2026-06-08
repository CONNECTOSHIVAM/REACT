// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa4J3FgkactZ0SfeluCBeyj_tuc8-ebI4",
  authDomain: "todospace-da1b3.firebaseapp.com",
  projectId: "todospace-da1b3",
  storageBucket: "todospace-da1b3.firebasestorage.app",
  messagingSenderId: "980497351314",
  appId: "1:980497351314:web:9c9533526cc910edd59c4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
