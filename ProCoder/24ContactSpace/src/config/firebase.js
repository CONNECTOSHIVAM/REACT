// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqeHiuaNdX5MTWtQH4sdrLAv0GnOlkSv4",
  authDomain: "contact-space.firebaseapp.com",
  projectId: "contact-space",
  storageBucket: "contact-space.firebasestorage.app",
  messagingSenderId: "280341682490",
  appId: "1:280341682490:web:798f0a549b15fb20ee5803"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);