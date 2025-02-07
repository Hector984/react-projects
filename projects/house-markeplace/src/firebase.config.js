// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYcN_vIzkYVirDRllSqNhS-JvmWwrZ9gE",
  authDomain: "house-marketplace-app-f050b.firebaseapp.com",
  projectId: "house-marketplace-app-f050b",
  storageBucket: "house-marketplace-app-f050b.firebasestorage.app",
  messagingSenderId: "208926859125",
  appId: "1:208926859125:web:9dfef0b41f61d666c23d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();