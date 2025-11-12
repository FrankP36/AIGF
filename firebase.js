// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// ✅ Your Firebase web app configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw6Cnjnl7g2vC-RksvgR-0PNSkEYavoms",
  authDomain: "aigirlfriend-110b1.firebaseapp.com",
  projectId: "aigirlfriend-110b1",
  storageBucket: "aigirlfriend-110b1.appspot.com", // ✅ FIXED: must end in .appspot.com
  messagingSenderId: "1007677116277",
  appId: "1:1007677116277:web:08b6c629f8aa13ada7cd3c",
  measurementId: "G-G7S02Z709P"
};

// ✅ Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
