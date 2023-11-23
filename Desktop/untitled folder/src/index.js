// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { getMessaging, getToken, subscribeToTopic } from 'firebase/messaging';

// const firebaseConfig = {
//   apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
//   authDomain: "firestorenotify-18950.firebaseapp.com",
//   projectId: "firestorenotify-18950",
//   storageBucket: "firestorenotify-18950.appspot.com",
//   messagingSenderId: "25988846759",
//   appId: "1:25988846759:web:9fcd13c71d1ebace633782",
//   measurementId: "G-KK5WHM59DH"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const messaging = getMessaging();

// getToken({ messaging, vapidKey: 'BE2GWM2Eo1LfX8BF7BYvgv1ecv8mktdOemB2Sv5BwfxZKQu4RSrF1K1pv6T1m0U213bKh9RK_dlCQsX78pfg_2w' })
//   .then((currentToken) => {
//     if (currentToken) {
//       console.log('Token:', currentToken);
//     } else {
//       console.log('No registration token available. Request permission to generate one.');
//     }
//   })
//   .catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//   });

// const registrationTokens = [
//   'cD1eQe2kBVNwI7x6HuwuVY:APA91bGAFi6p-N_TVvbNRzK89OQbGzgUXABatJxoL5khqXJvHR9-dnEJvIwNZFcXrJP2awuF3w0qbDr4g_KaPkOWAWSdPB-qnXUJEVN6mdGLu37fwPEHdgW4oeym45_0wTRf-NJYIHbR',
//   'YOUR_REGISTRATION_TOKEN_n'
// ];

// registrationTokens.forEach((token) => {
//   subscribeToTopic(messaging, token, 'users')
//     .then((response) => {
//       console.log('Successfully subscribed to topic:', response);
//     })
//     .catch((error) => {
//       console.log('Error subscribing to topic:', error);
//     });
// });


import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
  authDomain: "firestorenotify-18950.firebaseapp.com",
  projectId: "firestorenotify-18950",
  storageBucket: "firestorenotify-18950.appspot.com",
  messagingSenderId: "25988846759",
  appId: "1:25988846759:web:9fcd13c71d1ebace633782",
  measurementId: "G-KK5WHM59DH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const messaging = getMessaging(app);

async function fetchNotificationDocumentAndSendNotification(documentId) {
  try {
    const docRef = doc(db, 'notifications', documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const notificationData = docSnapshot.data();
      console.log('Document data:', notificationData);

      const payload = {
        notification: {
          body: notificationData.body,
        },
      };

      messaging.send({
        token: 'cD1eQe2kBVNwI7x6HuwuVY:APA91bGAFi6p-N_TVvbNRzK89OQbGzgUXABatJxoL5khqXJvHR9-dnEJvIwNZFcXrJP2awuF3w0qbDr4g_KaPkOWAWSdPB-qnXUJEVN6mdGLu37fwPEHdgW4oeym45_0wTRf-NJYIHbR', // Replace with the device token to which you want to send the notification
        payload: payload,
      })
      .then((response) => {
        console.log('Notification sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending notification:', error);
      });
    } else {
      console.log('No such document with ID:', documentId);
    }
  } catch (error) {
    console.error('Error fetching document:', error);
  }
}

const documentId = 'uZbZg3aa1zDuxF6LydNR';
fetchNotificationDocumentAndSendNotification(documentId);



























// async function fetchDataFromFirestore() {
//   const collectionRef = collection(db, '0QpvWIpGgZpZ8TxQSABx');
//   try {
//     const querySnapshot = await getDocs(collectionRef);
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//     });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchDataFromFirestore();


























// import { initializeApp } from 'firebase/app';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { getMessaging } from 'firebase/messaging';
// import { credential, initializeApp as initializeAdminApp, messaging } from 'firebase-admin';


// const firebaseConfig = {
//   apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
//   authDomain: "firestorenotify-18950.firebaseapp.com",
//   projectId: "firestorenotify-18950",
//   storageBucket: "firestorenotify-18950.appspot.com",
//   messagingSenderId: "25988846759",
//   appId: "1:25988846759:web:9fcd13c71d1ebace633782",
//   measurementId: "G-KK5WHM59DH"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const messaging = getMessaging(app);

// const serviceAccount = require('/Users/developer/Downloads/firestorenotify-18950-firebase-adminsdk-nzrfh-8368535fb3.json');
// initializeAdminApp({
//   credential: credential.cert(serviceAccount),
// });

// function sendNotificationToDevice(deviceToken, notificationData) {
//   const payload = {
//     notification: {
//       title: notificationData.content,
//       body: notificationData.body,
//     },
//     data: {
//       // Additional data which u want
      
//     },
//   };

//   messaging().send(payload)
//     .then((response) => {
//       console.log('Notification sent successfully:', response);
//     })
//     .catch((error) => {
//       console.error('Error sending notification:', error);
//     });
// }

// async function getFCMToken() {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       const token = await messaging.getToken({ vapidKey: 'BMKVhjz1mYvFDEyZ3vkeSF161Z60Qz6VDjp3h5xWo_7yKnpqwzsrFiPsBZ23fyyj7lJMfEFizxhB_-w0kKYaxGc' });
//       console.log('FCM Token:', token);
//       return token;
//     } else {
//       console.log('Notification permission denied.');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error getting FCM token:', error);
//     return null;
//   }
// }

// const documentId = 'uZbZg3aa1zDuxF6LydNR';
// fetchNotificationDocument(documentId).then(async (notificationData) => {
//   if (notificationData) {
//     const deviceToken = await getFCMToken();
//     if (deviceToken) {
//       sendNotificationToDevice(deviceToken, notificationData);
//     } else {
//       console.log('Could not retrieve FCM token. Unable to send notification.');
//     }
//   } else {
//     console.log('No notification data found for the document ID:', documentId);
//   }
// });


















// import { initializeApp } from 'firebase/app';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { credential, initializeApp as initializeAdminApp, messaging } from 'firebase-admin';


// const firebaseConfig = {
//   apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
//   authDomain: "firestorenotify-18950.firebaseapp.com",
//   projectId: "firestorenotify-18950",
//   storageBucket: "firestorenotify-18950.appspot.com",
//   messagingSenderId: "25988846759",
//   appId: "1:25988846759:web:9fcd13c71d1ebace633782",
//   measurementId: "G-KK5WHM59DH"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const serviceAccount = require('/Users/developer/Downloads/firestorenotify-18950-firebase-adminsdk-nzrfh-8368535fb3.json');
// initializeAdminApp({
//   credential: credential.cert(serviceAccount),
// });

// function sendNotificationToDevice( notificationData) {
//   const payload = {
//     notification: {
//       title: notificationData.content,
//       body: notificationData.body,
//     },
//     data: {
//       // Additional data which u want
      
//     },
//   };

//   messaging().send(payload)
//     .then((response) => {
//       console.log('Notification sent successfully:', response);
//     })
//     .catch((error) => {
//       console.error('Error sending notification:', error);
//     });
// }

// async function fetchNotificationDocument(documentId) {
//   try {
//     const docRef = doc(db, 'notifications', documentId);
//     const docSnapshot = await getDoc(docRef);

//     if (docSnapshot.exists()) {
//       console.log('Document data:', docSnapshot.data());
//       return docSnapshot.data();
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching document:', error);
//     return null;
//   }
// }

// const documentId = 'uZbZg3aa1zDuxF6LydNR';
// fetchNotificationDocument(documentId)
// .then((notificationData) => {
//   if (notificationData) {
   
//     console.log('Notification send data',notificationData);
//     sendNotificationToDevice( notificationData);
//   } else {
//     console.log('No notification data found for the document ID:', documentId);
//   }
// });


// import { initializeApp } from 'firebase/app';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { credential, initializeApp as initializeAdminApp, messaging } from 'firebase-admin'; 

// const firebaseConfig = {
//   apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
//     authDomain: "firestorenotify-18950.firebaseapp.com",
//     projectId: "firestorenotify-18950",
//     storageBucket: "firestorenotify-18950.appspot.com",
//     messagingSenderId: "25988846759",
//     appId: "1:25988846759:web:9fcd13c71d1ebace633782",
//     measurementId: "G-KK5WHM59DH"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const serviceAccount = require('/path/to/serviceAccountKey.json');
// initializeAdminApp({
//   credential: credential.cert(serviceAccount),
// });

// function sendNotificationToDevice(deviceToken, notificationData) {
//   const payload = {
//     notification: {
//       // title: notificationData.content,
//       body: notificationData.body,
//     },
//     data: {
    
//     },
//   };

//   messaging().sendToDevice(deviceToken, payload)
//     .then((response) => {
//       console.log('Notification sent successfully:', response);
//     })
//     .catch((error) => {
//       console.error('Error sending notification:', error);
//     });
// }

// async function fetchNotificationDocument(documentId) {
//   try {
//     const docRef = doc(db, 'notifications', documentId);
//     const docSnapshot = await getDoc(docRef);

//     if (docSnapshot.exists()) {
//       console.log('Document data:', docSnapshot.data());
//       return docSnapshot.data();
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching document:', error);
//     return null;
//   }
// }

// const documentId = 'uZbZg3aa1zDuxF6LydNR';
// fetchNotificationDocument(documentId)
//   .then((notificationData) => {
//     if (notificationData) {
//       const deviceToken = 'your-device-token'; 
//       sendNotificationToDevice(deviceToken, notificationData);
//     } else {
//       console.log('No notification data found for the document ID:', documentId);
//     }
//   });




// import { initializeApp } from 'firebase/app';
// import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { credential, initializeApp as initializeAdminApp } from 'firebase-admin';

// const firebaseConfig = {
//   apiKey: "AIzaSyCevm8FXlUYNnwnhb0prG4YQup3mmpw0oo",
//   authDomain: "firestorenotify-18950.firebaseapp.com",
//   projectId: "firestorenotify-18950",
//   storageBucket: "firestorenotify-18950.appspot.com",
//   messagingSenderId: "25988846759",
//   appId: "1:25988846759:web:9fcd13c71d1ebace633782",
//   measurementId: "G-KK5WHM59DH"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const serviceAccount = require('/Users/developer/Downloads/firestorenotify-18950-firebase-adminsdk-nzrfh-8368535fb3.json');
// initializeAdminApp({
//   credential: credential.cert(serviceAccount),
// });

// async function fetchNotificationDocument(documentId) {
//   try {
//     const docRef = doc(db, 'notifications', documentId);
//     const docSnapshot = await getDoc(docRef);

//     if (docSnapshot.exists()) {
//       return docSnapshot.data().body; // Assuming 'body' is the field in the document
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error('Error fetching document:', error);
//     return null;
//   }
// }

// const documentId = 'uZbZg3aa1zDuxF6LydNR';
// fetchNotificationDocument(documentId)
//   .then((bodyData) => {
//     if (bodyData) {
//       console.log('Notification body data:', bodyData);
//       // Use bodyData as needed (e.g., display, process, or manipulate it)
//     } else {
//       console.log('No notification data found for the document ID:', documentId);
//     }
//   });




