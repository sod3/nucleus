// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

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
export const messaging = getMessaging(app);

export const generateToken = async () =>{
    const permission =  await Notification.requestPermission()
    console.log(permission)   
    if (permission === "granted"){
        const token = await getToken(messaging, {
            vapidKey : "BJwmRQqeCm0rlhQdbYbNQ7kJ0Li3WfNxQN0BguNTsZQ7L4UdQxmncA_kNNCKZD64o7HX__0U4phsmnK2KQl8BCw" ,
        });
        console.log(token);
    } 
    const token = await getToken(messaging, {
        vapidKey : "BJwmRQqeCm0rlhQdbYbNQ7kJ0Li3WfNxQN0BguNTsZQ7L4UdQxmncA_kNNCKZD64o7HX__0U4phsmnK2KQl8BCw" ,
    });
    console.log(token);
    };