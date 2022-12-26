// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIuIckqkTj1OTLBtkKcCvgiHmSpcU1c4Q",
  authDomain: "craiglistclone.firebaseapp.com",
  projectId: "craiglistclone",
  storageBucket: "craiglistclone.appspot.com",
  messagingSenderId: "601183807983",
  appId: "1:601183807983:web:163a10c7896dde9282ee1a",
  measurementId: "G-1SR9DJ29LF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth=getAuth(app);
export {app,db,storage,auth};
