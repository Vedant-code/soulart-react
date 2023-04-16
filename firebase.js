// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBf688ad1nQuxl8bgha68oq3Xto7qVxVcE",
    authDomain: "soulian-art-51a15.firebaseapp.com",
    projectId: "soulian-art-51a15",
    storageBucket: "soulian-art-51a15.appspot.com",
    messagingSenderId: "738421986860",
    appId: "1:738421986860:web:61c27888c8a58d21ee2389"
  };

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export{app, db, storage};