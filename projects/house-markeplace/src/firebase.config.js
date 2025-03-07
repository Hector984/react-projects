// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const VITE_API_KEY = import.meta.env.VITE_API_KEY
const VITE_AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
const VITE_PROJECT_ID = import.meta.env.VITE_PROJECT_ID
const VITE_BUCKET = import.meta.env.VITE_BUCKET
const VITE_SENDER_ID = import.meta.env.VITE_SENDER_ID
const VITE_APP_ID = import.meta.env.VITE_APP_ID

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_BUCKET,
  messagingSenderId: VITE_SENDER_ID,
  appId: VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();