// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4rwZXj-461fbpVWRF1Ooy2ZdYULRq_xY",
  authDomain: "restaurent-isris.firebaseapp.com",
  projectId: "restaurent-isris",
  storageBucket: "restaurent-isris.firebasestorage.app",
  messagingSenderId: "912998201093",
  appId: "1:912998201093:web:78988dcefa57af9b47a96c",
  measurementId: "G-HK4HJGMZH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);