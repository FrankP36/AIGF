import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBw6Cnjnl7g2vC-RksvgR-0PNSkEYavoms",
  authDomain: "aigirlfriend-110b1.firebaseapp.com",
  projectId: "aigirlfriend-110b1",
  storageBucket: "aigirlfriend-110b1.firebasestorage.app",
  messagingSenderId: "1007677116277",
  appId: "1:1007677116277:web:08b6c629f8aa13ada7cd3c",
  measurementId: "G-G7S02Z709P",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
if (typeof window !== "undefined") getAnalytics(app);

const auth = getAuth(app);
export { auth };
