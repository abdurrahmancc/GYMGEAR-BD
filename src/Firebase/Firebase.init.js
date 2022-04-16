// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3-Qq8ORPNYZ35JkHY_d8QWrczDddxtZE",
  authDomain: "amazing-photography-bd.firebaseapp.com",
  projectId: "amazing-photography-bd",
  storageBucket: "amazing-photography-bd.appspot.com",
  messagingSenderId: "608679449150",
  appId: "1:608679449150:web:591e90039f88bbd1df776f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
