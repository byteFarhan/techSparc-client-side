// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDenIdnP4L-o0xxFc1h0tV-tEhPGU0GjLo",
  authDomain: "tach-sparc.firebaseapp.com",
  projectId: "tach-sparc",
  storageBucket: "tach-sparc.appspot.com",
  messagingSenderId: "1094589192471",
  appId: "1:1094589192471:web:6052ede6cf8bfa0d787f52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
