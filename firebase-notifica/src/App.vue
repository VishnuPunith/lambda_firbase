<!-- App.vue

<template>
  <div id="app">
    <button @click="subscribeToTopic">Subscribe to Topic</button>
  </div>
</template>

<script>
import firebase from 'firebase/app';
export default {
  methods: {
    subscribeToTopic() {
      // eslint-disable-next-line no-undef
      const messaging = firebase.messaging();

      messaging
        .requestPermission()
        .then(() => messaging.getToken())
        .then((token) => {
          console.log('Token:', token);

          // Subscribe to a topic (replace 'exampleTopic' with your desired topic)
          messaging.subscribeToTopic('general')
            .then(() => console.log('Subscribed to topic successfully'))
            .catch((error) => console.error('Error subscribing to topic:', error));
        })
        .catch((error) => console.error('Error getting permission:', error));
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style> -->



<template>
  <div>
    <h1>Send Notifications</h1>
    <button @click="sendNotifications">Send Notifications</button>
    <div v-if="response">
      <h2>Response:</h2>
      <pre>{{ response }}</pre>
    </div>
    <div v-if="error">
      <h2>Error:</h2>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: null,
      error: null,
    };
  },
  methods: {
    async sendNotifications() {
      try {
        const response = await this.$axios.post('https://ue4wjfmjlbzuahudsi2c252lze0mifnc.lambda-url.ap-south-1.on.aws/');
        this.response = response.data;
        this.error = null;
      } catch (error) {
        this.error = error.response.data;
        this.response = null;
      }
    },
  },
};
</script>


<!-- <template>
  <div>
    <h1>Send Notifications</h1>
    <button @click="sendNotifications">Send Notifications</button>
    <div v-if="response">
      <h2>Response:</h2>
      <pre>{{ response }}</pre>
    </div>
    <div v-if="error">
      <h2>Error:</h2>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: null,
      error: null,
    };
  },
  methods: {
    async sendNotifications() {
      try {
        const payload = {
          message: 'Hello, Lambda!', // Modify the message or payload as needed
          // Add any other required data here
        };

        const headers = {
          'x-api-key': 'arVjMzgUQG2ML8318MaSJ7PEXbCj3vuQa7MFPARb', // Replace with your actual API key
          'Content-Type': 'application/json',
        };

        const response = await this.$axios.post(
          'https://ue4wjfmjlbzuahudsi2c252lze0mifnc.lambda-url.ap-south-1.on.aws/', // Replace with your AWS API Gateway endpoint
          payload,
          { headers }
        );
        
        this.response = response.data;
        this.error = null;
        
      } catch (error) {
        this.error = error.response.data;
        this.response = null;
      }
    },
  },
};
</script> -->

<!-- <template>
  <div>
    <h1>Send Notifications</h1>
    <button @click="subscribeAndSend">Subscribe and Send Notifications</button>
    <div v-if="response">
      <h2>Response:</h2>
      <pre>{{ response }}</pre>
    </div>
    <div v-if="error">
      <h2>Error:</h2>
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  data() {
    return {
      response: null,
      error: null,
    };
  },
  methods: {
    async subscribeToTopic() {
      try {
        // eslint-disable-next-line no-undef
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('Token:', token);

        // Subscribe to a topic (replace 'general' with your desired topic)
        await messaging.subscribeToTopic('general');
        console.log('Subscribed to topic successfully');
      } catch (error) {
        console.error('Error subscribing to topic:', error);
      }
    },
    async sendNotifications() {
      try {
        const payload = {
          message: 'Hello, Lambda!', // Modify the message or payload as needed
          // Add any other required data here
        };

        const headers = {
          'x-api-key': 'arVjMzgUQG2ML8318MaSJ7PEXbCj3vuQa7MFPARb', // Replace with your actual API key
          'Content-Type': 'application/json',
        };

        const response = await this.$axios.post(
          'https://ue4wjfmjlbzuahudsi2c252lze0mifnc.lambda-url.ap-south-1.on.aws/', // Replace with your AWS API Gateway endpoint
          payload,
          { headers }
        );
        
        this.response = response.data;
        this.error = null;
      } catch (error) {
        this.error = error.response.data;
        this.response = null;
      }
    },
    async subscribeAndSend() {
      await this.subscribeToTopic();
      await this.sendNotifications();
    },
  },
  mounted() {
    // Initialize Firebase here if not already initialized
    // firebase.initializeApp({...});
  },
};
</script> -->
        