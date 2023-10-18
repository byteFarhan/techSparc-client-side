// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvN_XOV2e3LK-ZwBH0I7OvuZe_41uYKwQ",
  authDomain: "techsparc-ac895.firebaseapp.com",
  projectId: "techsparc-ac895",
  storageBucket: "techsparc-ac895.appspot.com",
  messagingSenderId: "1066309113843",
  appId: "1:1066309113843:web:c289fab262aaedbeb0a486",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
