// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGrk4_15IEKNDoQmiIUmRgnNiSBgXwJic",
  authDomain: "linked-in-clone-ba9db.firebaseapp.com",
  projectId: "linked-in-clone-ba9db",
  storageBucket: "linked-in-clone-ba9db.appspot.com",
  messagingSenderId: "137500204357",
  appId: "1:137500204357:web:15233a377ff62f2919f22c",
  measurementId: "G-LG0P95V1YW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth();
export const firestore = getFirestore(app);
// const analytics = getAnalytics(app);