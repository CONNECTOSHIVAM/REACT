// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY1LGzov1IYTZw9Te7FStcEP8xz5Nqp9o",
  authDomain: "contact-mng-12dbb.firebaseapp.com",
  projectId: "contact-mng-12dbb",
  storageBucket: "contact-mng-12dbb.firebasestorage.app",
  messagingSenderId: "212264114272",
  appId: "1:212264114272:web:16e49aef0bea9b38524b05",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
