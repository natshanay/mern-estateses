// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "amaz-jul.firebaseapp.com",
  projectId: "amaz-jul",
  storageBucket: "amaz-jul.firebasestorage.app",
  messagingSenderId: "957804261198",
  appId: "1:957804261198:web:15f6c09e7e021bb7c3381f",
  measurementId: "G-08SZZL8GGT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);