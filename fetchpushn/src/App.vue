<!-- 


<template>
  <div>
    <h1>Send Notification</h1>
    <button @click="handleButtonClick">Send Notification</button>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  methods: {
    async fetchNotificationDocument(documentId) {
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

      try {
        const docRef = doc(db, 'notifications', documentId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const notificationData = docSnapshot.data();
          console.log('Fetched Notification Data:', notificationData); 
          return notificationData;
        } else {
          console.log('No such document with ID:', documentId);
          return null;
        }
      } catch (error) {
        console.error('Error fetching document:', error);
        return null;
      }
    },
    async handleButtonClick() {
      const documentId = 'uZbZg3aa1zDuxF6LydNR';
      await this.fetchNotificationDocument(documentId);
    },
  },
};
</script> -->


<!-- <template>
  <div>
    <h1>Send Notification</h1>
    <button @click="handleButtonClick">Send Notification</button>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
  methods: {
    async fetchNotificationDocuments() {
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

      try {
        const notificationsRef = collection(db, 'notifications');
        const querySnapshot = await getDocs(notificationsRef);

        querySnapshot.forEach((doc) => {
          const notificationData = doc.data();
          console.log('Fetched Notification Data:', notificationData);
        });

        return querySnapshot.docs.map((doc) => doc.data());
      } catch (error) {
        console.error('Error fetching documents:', error);
        return null;
      }
    },
    async handleButtonClick() {
      await this.fetchNotificationDocuments();
    },
  },
};
</script> -->

<!-- 
<template>
  <div>
    <h1>Send Notification</h1>
    <button @click="handleButtonClick">Send Notification</button>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default {
  methods: {
    async fetchNotificationDocuments() {
      try {
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

        const notificationsRef = collection(db, 'notifications');
        const querySnapshot = await getDocs(notificationsRef);

        querySnapshot.forEach((doc) => {
          const notificationData = doc.data();
          console.log('Fetched Notification Data:', notificationData);
        });

        return querySnapshot.docs.map((doc) => doc.data());
      } catch (error) {
        console.error('Error fetching documents:', error);
        return null;
      }
    },
    async handleButtonClick() {
      await this.fetchNotificationDocuments();
    },
  },
};
</script> -->

<template>
  <div>
    <h1>Send Notification</h1>
    <button @click="handleButtonClick">Send Notification</button>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  methods: {
    async fetchNotificationDocument(documentId) {
      try {
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

        if (!db) {
          console.error('Firestore is not initialized properly');
          return null;
        }

        const docRef = doc(db, 'notifications', documentId);
        const docSnapshot = await getDoc(docRef);

        if (!docSnapshot.exists()) {
          console.error('Document does not exist:', documentId);
          return null;
        }

        const notifications = docSnapshot.data();
        console.log('Fetched Notification Data:', notifications);
        return notifications;
      } catch (error) {
        console.error('Error fetching document:',error.message ||  error);
        return null;
      }
    },
    async handleButtonClick() {
      const documentId = 'uZbZg3aa1zDuxF6LydNR'; 
      await this.fetchNotificationDocument(documentId);
    },
  },
};
</script>
