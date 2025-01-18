// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBwfHwsCkEAYOhBwesXPhobUw5ArqnGBDY",
  authDomain: "saho-laat.firebaseapp.com",
  projectId: "saho-laat",
  storageBucket: "saho-laat.firebasestorage.app",
  messagingSenderId: "848741455631",
  appId: "1:848741455631:web:3d4a08f71fcd4c2102d07a",
  measurementId: "G-BXLQL5YSBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export const generateToken = async () => {
await Notification.requestPermission()
}