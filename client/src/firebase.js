// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrEwtDqoM1rjWna1xNtLm72rTUfC2cnEE",
  authDomain: "padstream-69c21.firebaseapp.com",
  projectId: "padstream-69c21",
  storageBucket: "padstream-69c21.appspot.com",
  messagingSenderId: "221694111867",
  appId: "1:221694111867:web:d242e14a41bebb566f32de",
  measurementId: "G-NMHZFE4HEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;