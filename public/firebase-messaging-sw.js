importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBwfHwsCkEAYOhBwesXPhobUw5ArqnGBDY",
    authDomain: "saho-laat.firebaseapp.com",
    projectId: "saho-laat",
    storageBucket: "saho-laat.firebasestorage.app",
    messagingSenderId: "848741455631",
    appId: "1:848741455631:web:3d4a08f71fcd4c2102d07a",
    measurementId: "G-BXLQL5YSBL"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message',
        payload
    );
    
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon // Ensure it's 'icon', not 'image'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
