// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import database
import { getFirestore } from 'firebase/firestore';
// Import authentication from Firebase
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7uVtc5LZ65UMaYr06F5WdoL07Dhuo8yY",
  authDomain: "fern-blog-website.firebaseapp.com",
  projectId: "fern-blog-website",
  storageBucket: "fern-blog-website.appspot.com",
  messagingSenderId: "516261758899",
  appId: "1:516261758899:web:1ca1fe9c989f015967adc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database Connection
export const db = getFirestore(app);

// Authentication Connection
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();