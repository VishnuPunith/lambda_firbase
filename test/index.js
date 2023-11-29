const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Function to send a notification to the topic 'allDevices'
const sendNotification = () => {
  const message = "Your notification message"; // Customize this message
  const payload = {
    notification: {
      title: "Your App Name",
      body: message,
    },
  };

  // Send the notification to the topic 'allDevices'
  return admin.messaging().sendToTopic("allDevices", payload);
};

// HTTP-triggered function
exports.sendNotificationHTTP = functions.https.onRequest((req, res) => {
  sendNotification()
      .then((response) => {
        console.log("Notification sent successfully:", response);
        res.status(200).send("Notification sent successfully");
      })
      .catch((error) => {
        console.error("Error sending notification:", error);
        res.status(500).send("Error sending notification");
      });
});

// Scheduled function to send a notification every 2 hours
// eslint-disable-next-line max-len
exports.sendNotificationScheduler = functions.pubsub.schedule("every 2 hours").timeZone("UTC").onRun((_context) => {
  if (process.env.FUNCTIONS_EMULATOR) {
    console.log("Local emulator environment, skipping scheduled task.");
    return null;
  }

  return sendNotification()
      .then((response) => {
        console.log("Scheduled notification sent successfully:", response);
        return null;
      })
      .catch((error) => {
        console.error("Error sending scheduled notification:", error);
        return null;
      });
});
