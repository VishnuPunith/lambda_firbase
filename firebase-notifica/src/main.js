// // main.js

// import Vue from 'vue';
// import App from './App.vue';
// import firebase from 'firebase/app';
// import 'firebase/messaging';

// // Your Firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
//   authDomain: "firestorenotify-18950.firebaseapp.com",
//   projectId: "firestorenotify-18950",
//   storageBucket: "firestorenotify-18950.appspot.com",
//   messagingSenderId: "25988846759",
//   appId: "1:25988846759:web:9fcd13c71d1ebace633782",
//   measurementId: "G-KK5WHM59DH"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // eslint-disable-next-line no-unused-vars
// const messaging = firebase.messaging();

// new Vue({
//   render: (h) => h(App),
// }).$mount('#app');


// main.js or wherever your Vue app is initialized
import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  
    apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
  authDomain: "firestorenotify-18950.firebaseapp.com",
  projectId: "firestorenotify-18950",
  storageBucket: "firestorenotify-18950.appspot.com",
  messagingSenderId: "25988846759",
  appId: "1:25988846759:web:9fcd13c71d1ebace633782",
  measurementId: "G-KK5WHM59DH"

};

firebase.initializeApp(firebaseConfig);


// Set the base URL for your Firebase function
axios.defaults.baseURL = 'arVjMzgUQG2ML8318MaSJ7PEXbCj3vuQa7MFPARb'; // Replace with your Firebase function URL

Vue.prototype.$axios = axios;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
