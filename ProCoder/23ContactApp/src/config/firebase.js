// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9aOH8l_SulawbcPPHrkuoGR5gUUDf3-o",
  authDomain: "vite-contact-c52cf.firebaseapp.com",
  projectId: "vite-contact-c52cf",
  storageBucket: "vite-contact-c52cf.firebasestorage.app",
  messagingSenderId: "643264421373",
  appId: "1:643264421373:web:6134048641759b15668d94",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
