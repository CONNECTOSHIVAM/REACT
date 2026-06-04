// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjmOnXzDIwiJQkIrJXsLQFUcPq5XFoAOA",
  authDomain: "contact-app-8725d.firebaseapp.com",
  projectId: "contact-app-8725d",
  storageBucket: "contact-app-8725d.firebasestorage.app",
  messagingSenderId: "654048717267",
  appId: "1:654048717267:web:e29c61f0fbcedcd5b82726"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);