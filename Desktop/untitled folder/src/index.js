import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { credential, initializeApp as initializeAdminApp, messaging } from 'firebase-admin';


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

const serviceAccount = require('/Users/developer/Downloads/firestorenotify-18950-firebase-adminsdk-nzrfh-8368535fb3.json');
initializeAdminApp({
  credential: credential.cert(serviceAccount),
});

function sendNotificationToDevice(deviceToken, notificationData) {
  const payload = {
    notification: {
      title: notificationData.content,
      body: notificationData.body,
    },
    data: {
      // Additional data which u want
      
    },
  };

  messaging().send(payload)
    .then((response) => {
      console.log('Notification sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending notification:', error);
    });
}

async function fetchNotificationDocument(documentId) {
  try {
    const docRef = doc(db, 'notifications', documentId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      console.log('Document data:', docSnapshot.data());
      return docSnapshot.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    return null;
  }
}

const documentId = 'uZbZg3aa1zDuxF6LydNR';
fetchNotificationDocument(documentId)
.then((notificationData) => {
  if (notificationData) {
    const deviceToken = 'your-device-token'; 
    // console.log('Notification send data',notificationData);
    sendNotificationToDevice(deviceToken, notificationData);
  } else {
    console.log('No notification data found for the document ID:', documentId);
  }
});

































