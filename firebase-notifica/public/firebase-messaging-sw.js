// public/firebase-messaging-sw.js
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js');

// eslint-disable-next-line no-undef
firebase.initializeApp({
    apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
    authDomain: "firestorenotify-18950.firebaseapp.com",
    projectId: "firestorenotify-18950",
    storageBucket: "firestorenotify-18950.appspot.com",
    messagingSenderId: "25988846759",
    appId: "1:25988846759:web:9fcd13c71d1ebace633782",
    measurementId: "G-KK5WHM59DH"
});

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  // Handle the received message here
});
