
// exports.handler = async (event, context) => {
//   try {
//     // Your SNS logic here
//     const AWS = require('aws-sdk');
//     AWS.config.update({ region: 'ap-south-1' });

//     const sns = new AWS.SNS();

//     const params = {
//       Message: 'Your notification message',
//       Subject: 'Your notification subject',
//       TopicArn: 'arn:aws:sns:ap-south-1:753548365490:Mobile_notification_test'
//     };
    

//     const data = await sns.publish(params).promise();
//     console.log('Notification sent:', data);

//     // Your original response
//     const response = {
//       statusCode: 200,
//       body: 'Welcome to vistas Learning ',
//     };
//     return response;
//   } catch (error) {
//     console.error('Error:', error);
    
//     // Your error response
//     const errorResponse = {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//     return errorResponse;
//   }
// };


// const { google } = require('googleapis');
// const AWS = require('aws-sdk');

// // Replace 'credentials.json' with the path to your service account key file
// const creds = require('/Users/developer/Desktop/Notification/storagenoti678-e02fbe45167a.json');

// exports.handler = async (event, context) => {
//   try {
//     // Authorize with Google Sheets API using credentials
//     const sheets = google.sheets({ version: 'v4', auth: creds });

//     // Specify the spreadsheet ID and range to read data
//     const spreadsheetId = 'YOUR_SPREADSHEET_ID';
//     const range = 'Sheet1!A1:B10'; // Adjust to your desired range

//     // Retrieve data from Google Sheets
//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId,
//       range,
//     });

//     // Process retrieved data
//     const values = response.data.values;
//     console.log('Data from Google Sheet:', values);

//     // Send data to SNS or perform any other actions
//     const sns = new AWS.SNS();
//     const snsParams = {
//       // Your SNS parameters
//       Message: 'Data from Google Sheets: ' + JSON.stringify(values),
//       Subject: 'Google Sheets Data',
//       TopicArn: 'arn:aws:sns:ap-south-1:753548365490:Mobile_notification_test', // Replace with your SNS topic ARN
//     };

//     await sns.publish(snsParams).promise();

//     // Lambda response
//     const lambdaResponse = {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Google Sheet data retrieved and published to SNS' }),
//     };
//     return lambdaResponse;
//   } catch (error) {
//     console.error('Error:', error);
//     const errorResponse = {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//     return errorResponse;
//   }
// };

// const { google } = require('googleapis');
// const AWS = require('aws-sdk');
// const creds = require('/Users/developer/Desktop/Notification/storagenoti678-e02fbe45167a.json');

// exports.handler = async (event, context) => {
//   try {
//     const sheets = google.sheets({ version: 'v4', auth: creds });

//     const spreadsheetId = '1y8sEdrpvxzD_R5hqWc7d9bgyqucnT4IEVc66AbBmlUY';
//     const range = 'Sheet1!A:A'; // Adjust the range to read only the 'Title' column

//     const response = await sheets.spreadsheets.values.get({
//       spreadsheetId,
//       range,
//     });

//     const titleColumn = response.data.values;

//     // Assuming the first row is the header, start from index 1
//     for (let i = 1; i < titleColumn.length; i++) {
//       const title = titleColumn[i][0]; // Assuming data starts from the second row

//       // Sending SNS notification based on the title value
//       const sns = new AWS.SNS();
//       const snsParams = {
//         Message: `Notification: ${title}`,
//         Subject: 'Google Sheets Notification',
//         TopicArn: 'arn:aws:sns:ap-south-1:753548365490:Mobile_notification_test', // Replace with your SNS topic ARN
//       };

//       await sns.publish(snsParams).promise();
//     }

//     const lambdaResponse = {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Notifications sent based on Google Sheets data' }),
//     };
//     return lambdaResponse;
//   } catch (error) {
//     console.error('Error:', error);
//     const errorResponse = {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//     return errorResponse;
//   }
// };


// const { google } = require('googleapis');
// const AWS = require('aws-sdk');
// const creds = require('./storagenoti678-e02fbe45167a.json');

// exports.handler = async () => {
//   try {
//     const sheets = google.sheets({ version: 'v4', auth: creds });
//     const spreadsheetId = '1y8sEdrpvxzD_R5hqWc7d9bgyqucnT4IEVc66AbBmlUY';
//     const range = 'Sheet1!A:A';

//     const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
//     const titleColumn = response.data.values || [];

//     const sns = new AWS.SNS({ region: 'ap-south-1' }); // Specify the correct AWS region
//     const TopicArn = 'arn:aws:sns:ap-south-1:753548365490:Mobile_notification_test'; // Replace with your SNS topic ARN

//     for (let i = 0; i < titleColumn.length; i++) {
//       const title = titleColumn[i][0];
//       await sns.publish({ Message: `Notification: ${title}`, Subject: 'Google Sheets Notification', TopicArn }).promise();
//     }

//     return { statusCode: 200, body: JSON.stringify({ message: 'Notifications sent based on Google Sheets data' }) };
//   } catch (error) {
//     console.error('Error:', error);
//     return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error' }) };
//   }
// };

// const { google } = require('googleapis');

// exports.handler = async () => {
//   try {
//     const creds = {
//         "type": "service_account",
//         "project_id": "storagenoti678",
//         "private_key_id": "e02fbe45167a53f9fd1f5266b2644fff8b737643",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC0eu7uTdn46EUY\n0qdbIf7oB7vJ8mnHivRjbT3e0T2dOl3sNJ+WdNC2YXT3bmEoEH2O2FgJrlN6kC1l\ne+0j1t7VpbWy2cRPh4oQmpIC6kQoIIyTAh5W377jrHHIsLEYwdbxrV2PF4+xjCO3\n7jis2jQpB3A9SfGc4vy8NxH9Zcy7j/5+VIrSHYq9Wd0u+Mz8P6zS9jkPVJ/xQ51N\nvjJ1E2oGLUMe0xe1iJz0EmD+rZsKaefGYyZ8LolC6QNxsjzIKIhBTNEqsupiluK5\njWiApGizGQpcL4U98NNoxNCe62qXNfraPwzkbMUxWEMqBSGfmo03DiBj3Z3eAkai\nnoPEZENNAgMBAAECgf8pr/QjLwX0fFi+7/lE+8LjUn7IVlPBSIb69z60gFLgvM4y\nh4IVscQQq89mhUoHh+tM48G9fLJiX3n5LIsHHXTaJ/d44TdJVw9DiQdOpw1ufszE\nBlv5rRoDVQsqxRZyVhQ+FeErJC5EPZtzmzuH+vacR/nUkYNVTIIKQOG/MwHriiTP\nKCMQd/0G4A8Mkkh7iAI4ECulrXmPGj0qCrWAzeyRpG6Db6sDdHT5nhAWKopLSLPz\nVImtihPi4BLqa0sqChWFJGQi0twZHC0zclugrqOKDvMgrc8XVKwkpEsJA6C2jeNb\nF3lMMo6vHHJG6oAg83ibHVfRMWvqokbbMFYt0FECgYEA78LnS/LCwqtm1eFlLRiD\nZEz0120psMhGVoCpDGAsfzLVfoWRTLrg5y0t9QCRbNCVirZh8D7KZIH4Kg3E8/0M\ntCdCbIMMwVuE0Q3S96cu5wbiFIhbQ9IBNqSjDXNTLRFMJqaee0tdPpL6YQdO9AjG\n0tw7k3BBA69UGH3dO7VUDH8CgYEAwLQvbNU3Az1liRt19jVrfZ+aaMtMmquogT/8\nmCTV7ounvXsWYqwpZg4N6AnfI4HwvDLDoOTK9RnYUj2dPguuQJjkuEISJJEzyHAC\nsYjGCgsxa4Y73O4MsU0B8BAwFY79+urJnMywtRNzovBP4BsDgWhUHTAu7usM/ay0\n73GvOjMCgYBnVtNIadbF/whw0RhBqpofJgg1vehFON0QNZ4nJmCnZmqcgMdSkg2T\ntmZjfh4wD2sVAW0PFpE3Zslmns6v9vZ9w5oemRFrWZ3SWSn/8gAGNXJGNUtY3PAG\n9EkO6BEGkLkIw7H1JFOJP+JI5dSC3DGN+rx23OA4zV3qvH0ZWhti0wKBgDFK5ga0\n04mknuBfgeEk8QYFWX4M4t99oXDOaVKRuZd3acTyQ1uiJkTQu4XrYIS4rFe3tIrn\ne3MO1WLUF/DTFBO6CGeJnxJzggd3f3jiP6Y6Dr4ubAmratu/kwtRWLtrBFS20jOl\nuF3ZR+8aAZSV1GO5yCpfNOIwhfYtw2qsbeI5AoGBAK3KdTxBy01FZ9EJBtgiAsDT\nwFZC3YV46mq/bEnHsCG33QO9eAXuMVHWS7h41iLAkb3aQO/fyLQh0eZZR2h6Ymzm\ntMyJTeR83ZSQoAvSvc7ICZUmEDXz6XNEz4eiKwvvxd94XqXKKEKuIfTYf/M4/3Xn\nul5rW0AZIZ3x8zrv484Y\n-----END PRIVATE KEY-----\n",
//         "client_email": "vistaslearning@storagenoti678.iam.gserviceaccount.com",
//         "client_id": "116215830434090918826",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/vistaslearning%40storagenoti678.iam.gserviceaccount.com",
//         "universe_domain": "googleapis.com"
//     };

//     const auth = new google.auth.GoogleAuth({
//       credentials: creds,
//       scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly', // Adjust the scope as needed
//     });

//     const sheets = google.sheets({ version: 'v4', auth });
//     const spreadsheetId = '1y8sEdrpvxzD_R5hqWc7d9bgyqucnT4IEVc66AbBmlUY';
//     const range = 'Sheet1!A:A';

//     const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
//     const titleColumn = response.data.values || [];

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Data fetched from Google Sheets', titleColumn }),
//     };
//   } catch (error) {
//     console.error('Error:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };





// const { google } = require('googleapis');
// const AWS = require('aws-sdk');

// exports.handler = async () => {
//   try {
//     const creds = {
      
//         "type": "service_account",
//         "project_id": "storagenoti678",
//         "private_key_id": "e02fbe45167a53f9fd1f5266b2644fff8b737643",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC0eu7uTdn46EUY\n0qdbIf7oB7vJ8mnHivRjbT3e0T2dOl3sNJ+WdNC2YXT3bmEoEH2O2FgJrlN6kC1l\ne+0j1t7VpbWy2cRPh4oQmpIC6kQoIIyTAh5W377jrHHIsLEYwdbxrV2PF4+xjCO3\n7jis2jQpB3A9SfGc4vy8NxH9Zcy7j/5+VIrSHYq9Wd0u+Mz8P6zS9jkPVJ/xQ51N\nvjJ1E2oGLUMe0xe1iJz0EmD+rZsKaefGYyZ8LolC6QNxsjzIKIhBTNEqsupiluK5\njWiApGizGQpcL4U98NNoxNCe62qXNfraPwzkbMUxWEMqBSGfmo03DiBj3Z3eAkai\nnoPEZENNAgMBAAECgf8pr/QjLwX0fFi+7/lE+8LjUn7IVlPBSIb69z60gFLgvM4y\nh4IVscQQq89mhUoHh+tM48G9fLJiX3n5LIsHHXTaJ/d44TdJVw9DiQdOpw1ufszE\nBlv5rRoDVQsqxRZyVhQ+FeErJC5EPZtzmzuH+vacR/nUkYNVTIIKQOG/MwHriiTP\nKCMQd/0G4A8Mkkh7iAI4ECulrXmPGj0qCrWAzeyRpG6Db6sDdHT5nhAWKopLSLPz\nVImtihPi4BLqa0sqChWFJGQi0twZHC0zclugrqOKDvMgrc8XVKwkpEsJA6C2jeNb\nF3lMMo6vHHJG6oAg83ibHVfRMWvqokbbMFYt0FECgYEA78LnS/LCwqtm1eFlLRiD\nZEz0120psMhGVoCpDGAsfzLVfoWRTLrg5y0t9QCRbNCVirZh8D7KZIH4Kg3E8/0M\ntCdCbIMMwVuE0Q3S96cu5wbiFIhbQ9IBNqSjDXNTLRFMJqaee0tdPpL6YQdO9AjG\n0tw7k3BBA69UGH3dO7VUDH8CgYEAwLQvbNU3Az1liRt19jVrfZ+aaMtMmquogT/8\nmCTV7ounvXsWYqwpZg4N6AnfI4HwvDLDoOTK9RnYUj2dPguuQJjkuEISJJEzyHAC\nsYjGCgsxa4Y73O4MsU0B8BAwFY79+urJnMywtRNzovBP4BsDgWhUHTAu7usM/ay0\n73GvOjMCgYBnVtNIadbF/whw0RhBqpofJgg1vehFON0QNZ4nJmCnZmqcgMdSkg2T\ntmZjfh4wD2sVAW0PFpE3Zslmns6v9vZ9w5oemRFrWZ3SWSn/8gAGNXJGNUtY3PAG\n9EkO6BEGkLkIw7H1JFOJP+JI5dSC3DGN+rx23OA4zV3qvH0ZWhti0wKBgDFK5ga0\n04mknuBfgeEk8QYFWX4M4t99oXDOaVKRuZd3acTyQ1uiJkTQu4XrYIS4rFe3tIrn\ne3MO1WLUF/DTFBO6CGeJnxJzggd3f3jiP6Y6Dr4ubAmratu/kwtRWLtrBFS20jOl\nuF3ZR+8aAZSV1GO5yCpfNOIwhfYtw2qsbeI5AoGBAK3KdTxBy01FZ9EJBtgiAsDT\nwFZC3YV46mq/bEnHsCG33QO9eAXuMVHWS7h41iLAkb3aQO/fyLQh0eZZR2h6Ymzm\ntMyJTeR83ZSQoAvSvc7ICZUmEDXz6XNEz4eiKwvvxd94XqXKKEKuIfTYf/M4/3Xn\nul5rW0AZIZ3x8zrv484Y\n-----END PRIVATE KEY-----\n",
//         "client_email": "vistaslearning@storagenoti678.iam.gserviceaccount.com",
//         "client_id": "116215830434090918826",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/vistaslearning%40storagenoti678.iam.gserviceaccount.com",
//         "universe_domain": "googleapis.com"
      
//     };

//     const auth = new google.auth.GoogleAuth({
//       credentials: creds,
//       scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly', // Adjust the scope as needed
//     });

//     const sheets = google.sheets({ version: 'v4', auth });
//     const spreadsheetId = '1y8sEdrpvxzD_R5hqWc7d9bgyqucnT4IEVc66AbBmlUY';
//     const range = 'Sheet1!A:A';

//     const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
//     const titleColumn = response.data.values || [];

//     // AWS SNS setup
//     AWS.config.update({ region: 'ap-south-1' });
//     const sns = new AWS.SNS();
//     const TopicArn = 'arn:aws:sns:ap-south-1:753548365490:Mobile_notification_test'; // Replace with your SNS topic ARN

//     for (let i = 0; i < titleColumn.length; i++) {
//       const title = titleColumn[i][0];
//       await sns.publish({
//         Message: `Notification: ${title}`,
//         Subject: 'Google Sheets Notification',
//         TopicArn,
//       }).promise();
//     }

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Notifications sent based on Google Sheets data',titleColumn}),
//     };
//   } catch (error) {
//     console.error('Error:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };


// const { google } = require('googleapis');
// const AWS = require('aws-sdk');

// exports.handler = async () => {
//   try {
//     const creds = {
//       "type": "service_account",
//         "project_id": "storagenoti678",
//         "private_key_id": "e02fbe45167a53f9fd1f5266b2644fff8b737643",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC0eu7uTdn46EUY\n0qdbIf7oB7vJ8mnHivRjbT3e0T2dOl3sNJ+WdNC2YXT3bmEoEH2O2FgJrlN6kC1l\ne+0j1t7VpbWy2cRPh4oQmpIC6kQoIIyTAh5W377jrHHIsLEYwdbxrV2PF4+xjCO3\n7jis2jQpB3A9SfGc4vy8NxH9Zcy7j/5+VIrSHYq9Wd0u+Mz8P6zS9jkPVJ/xQ51N\nvjJ1E2oGLUMe0xe1iJz0EmD+rZsKaefGYyZ8LolC6QNxsjzIKIhBTNEqsupiluK5\njWiApGizGQpcL4U98NNoxNCe62qXNfraPwzkbMUxWEMqBSGfmo03DiBj3Z3eAkai\nnoPEZENNAgMBAAECgf8pr/QjLwX0fFi+7/lE+8LjUn7IVlPBSIb69z60gFLgvM4y\nh4IVscQQq89mhUoHh+tM48G9fLJiX3n5LIsHHXTaJ/d44TdJVw9DiQdOpw1ufszE\nBlv5rRoDVQsqxRZyVhQ+FeErJC5EPZtzmzuH+vacR/nUkYNVTIIKQOG/MwHriiTP\nKCMQd/0G4A8Mkkh7iAI4ECulrXmPGj0qCrWAzeyRpG6Db6sDdHT5nhAWKopLSLPz\nVImtihPi4BLqa0sqChWFJGQi0twZHC0zclugrqOKDvMgrc8XVKwkpEsJA6C2jeNb\nF3lMMo6vHHJG6oAg83ibHVfRMWvqokbbMFYt0FECgYEA78LnS/LCwqtm1eFlLRiD\nZEz0120psMhGVoCpDGAsfzLVfoWRTLrg5y0t9QCRbNCVirZh8D7KZIH4Kg3E8/0M\ntCdCbIMMwVuE0Q3S96cu5wbiFIhbQ9IBNqSjDXNTLRFMJqaee0tdPpL6YQdO9AjG\n0tw7k3BBA69UGH3dO7VUDH8CgYEAwLQvbNU3Az1liRt19jVrfZ+aaMtMmquogT/8\nmCTV7ounvXsWYqwpZg4N6AnfI4HwvDLDoOTK9RnYUj2dPguuQJjkuEISJJEzyHAC\nsYjGCgsxa4Y73O4MsU0B8BAwFY79+urJnMywtRNzovBP4BsDgWhUHTAu7usM/ay0\n73GvOjMCgYBnVtNIadbF/whw0RhBqpofJgg1vehFON0QNZ4nJmCnZmqcgMdSkg2T\ntmZjfh4wD2sVAW0PFpE3Zslmns6v9vZ9w5oemRFrWZ3SWSn/8gAGNXJGNUtY3PAG\n9EkO6BEGkLkIw7H1JFOJP+JI5dSC3DGN+rx23OA4zV3qvH0ZWhti0wKBgDFK5ga0\n04mknuBfgeEk8QYFWX4M4t99oXDOaVKRuZd3acTyQ1uiJkTQu4XrYIS4rFe3tIrn\ne3MO1WLUF/DTFBO6CGeJnxJzggd3f3jiP6Y6Dr4ubAmratu/kwtRWLtrBFS20jOl\nuF3ZR+8aAZSV1GO5yCpfNOIwhfYtw2qsbeI5AoGBAK3KdTxBy01FZ9EJBtgiAsDT\nwFZC3YV46mq/bEnHsCG33QO9eAXuMVHWS7h41iLAkb3aQO/fyLQh0eZZR2h6Ymzm\ntMyJTeR83ZSQoAvSvc7ICZUmEDXz6XNEz4eiKwvvxd94XqXKKEKuIfTYf/M4/3Xn\nul5rW0AZIZ3x8zrv484Y\n-----END PRIVATE KEY-----\n",
//         "client_email": "vistaslearning@storagenoti678.iam.gserviceaccount.com",
//         "client_id": "116215830434090918826",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/vistaslearning%40storagenoti678.iam.gserviceaccount.com",
//         "universe_domain": "googleapis.com"
//     };

//     const auth = new google.auth.GoogleAuth({
//       credentials: creds,
//       scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly', // Adjust the scope as needed
//     });

//     const sheets = google.sheets({ version: 'v4', auth });
//     const spreadsheetId = '1y8sEdrpvxzD_R5hqWc7d9bgyqucnT4IEVc66AbBmlUY';
//     const range = 'Sheet1!A:A'; 

//     const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
//     const titleColumn = response.data.values || [];

//     // AWS SNS setup
//     AWS.config.update({ region: 'ap-south-1' });
//     const sns = new AWS.SNS();
//     const TopicArn = 'arn:aws:sns:ap-south-1:753548365490:Mobile_notification_test'; 

//     for (let i = 0; i < titleColumn.length; i++) {
//       const title = titleColumn[i][0];
//       await sns.publish({
//         Message: `Notification: ${title}`,
//         Subject: 'Google Sheets Notification',
//         TopicArn,
// //       }).promise();
// //     }

// //     console.log('Notifications sent successfully.',titleColumn); 

// //     return {
// //       statusCode: 200,
// //       body: JSON.stringify({ message: 'Notifications sent based on Google Sheets data', titleColumn }),
// //     };
// //   } catch (error) {
// //     console.error('Error:', error);
// //     return {
// //       statusCode: 500,
// //       body: JSON.stringify({ error: 'Internal Server Error' }),
// //     };
// //   }
// // };
// const admin = require('firebase-admin');
// const { google } = require('googleapis');

// // Initialize Firebase Admin SDK with service account credentials
// const serviceAccount = require(
// {
//   "type": "service_account",
//   "project_id": "storagenoti678",
//   "private_key_id": "e02fbe45167a53f9fd1f5266b2644fff8b737643",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQC0eu7uTdn46EUY\n0qdbIf7oB7vJ8mnHivRjbT3e0T2dOl3sNJ+WdNC2YXT3bmEoEH2O2FgJrlN6kC1l\ne+0j1t7VpbWy2cRPh4oQmpIC6kQoIIyTAh5W377jrHHIsLEYwdbxrV2PF4+xjCO3\n7jis2jQpB3A9SfGc4vy8NxH9Zcy7j/5+VIrSHYq9Wd0u+Mz8P6zS9jkPVJ/xQ51N\nvjJ1E2oGLUMe0xe1iJz0EmD+rZsKaefGYyZ8LolC6QNxsjzIKIhBTNEqsupiluK5\njWiApGizGQpcL4U98NNoxNCe62qXNfraPwzkbMUxWEMqBSGfmo03DiBj3Z3eAkai\nnoPEZENNAgMBAAECgf8pr/QjLwX0fFi+7/lE+8LjUn7IVlPBSIb69z60gFLgvM4y\nh4IVscQQq89mhUoHh+tM48G9fLJiX3n5LIsHHXTaJ/d44TdJVw9DiQdOpw1ufszE\nBlv5rRoDVQsqxRZyVhQ+FeErJC5EPZtzmzuH+vacR/nUkYNVTIIKQOG/MwHriiTP\nKCMQd/0G4A8Mkkh7iAI4ECulrXmPGj0qCrWAzeyRpG6Db6sDdHT5nhAWKopLSLPz\nVImtihPi4BLqa0sqChWFJGQi0twZHC0zclugrqOKDvMgrc8XVKwkpEsJA6C2jeNb\nF3lMMo6vHHJG6oAg83ibHVfRMWvqokbbMFYt0FECgYEA78LnS/LCwqtm1eFlLRiD\nZEz0120psMhGVoCpDGAsfzLVfoWRTLrg5y0t9QCRbNCVirZh8D7KZIH4Kg3E8/0M\ntCdCbIMMwVuE0Q3S96cu5wbiFIhbQ9IBNqSjDXNTLRFMJqaee0tdPpL6YQdO9AjG\n0tw7k3BBA69UGH3dO7VUDH8CgYEAwLQvbNU3Az1liRt19jVrfZ+aaMtMmquogT/8\nmCTV7ounvXsWYqwpZg4N6AnfI4HwvDLDoOTK9RnYUj2dPguuQJjkuEISJJEzyHAC\nsYjGCgsxa4Y73O4MsU0B8BAwFY79+urJnMywtRNzovBP4BsDgWhUHTAu7usM/ay0\n73GvOjMCgYBnVtNIadbF/whw0RhBqpofJgg1vehFON0QNZ4nJmCnZmqcgMdSkg2T\ntmZjfh4wD2sVAW0PFpE3Zslmns6v9vZ9w5oemRFrWZ3SWSn/8gAGNXJGNUtY3PAG\n9EkO6BEGkLkIw7H1JFOJP+JI5dSC3DGN+rx23OA4zV3qvH0ZWhti0wKBgDFK5ga0\n04mknuBfgeEk8QYFWX4M4t99oXDOaVKRuZd3acTyQ1uiJkTQu4XrYIS4rFe3tIrn\ne3MO1WLUF/DTFBO6CGeJnxJzggd3f3jiP6Y6Dr4ubAmratu/kwtRWLtrBFS20jOl\nuF3ZR+8aAZSV1GO5yCpfNOIwhfYtw2qsbeI5AoGBAK3KdTxBy01FZ9EJBtgiAsDT\nwFZC3YV46mq/bEnHsCG33QO9eAXuMVHWS7h41iLAkb3aQO/fyLQh0eZZR2h6Ymzm\ntMyJTeR83ZSQoAvSvc7ICZUmEDXz6XNEz4eiKwvvxd94XqXKKEKuIfTYf/M4/3Xn\nul5rW0AZIZ3x8zrv484Y\n-----END PRIVATE KEY-----\n",
//   "client_email": "vistaslearning@storagenoti678.iam.gserviceaccount.com",
//   "client_id": "116215830434090918826",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/vistaslearning%40storagenoti678.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// }
// ); // Replace with your service account key path
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// exports.handler = async () => {
//   try {
//     // Your existing Google Sheets API code to fetch data
//     const creds = { /* Your Google Sheets service account credentials */ };
//     const auth = new google.auth.GoogleAuth({
//       credentials: creds,
//       scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly',
//     });
//     // ... (fetching data from Google Sheets)

//     // Loop through the fetched data to send Firebase push notifications
//     for (let i = 0; i < titleColumn.length; i++) {
//       const title = titleColumn[i][0];
//       const message = {
//         notification: {
//           title: 'Google Sheets Notification',
//           body: `Notification: ${title}`,
//         },
//         // Add any additional data if needed
//         data: {
//           key: 'value',
//         },
//         // Replace with the device token(s) you want to send notifications to
//         token: 'cD1eQe2kBVNwI7x6HuwuVY:APA91bGAFi6p-N_TVvbNRzK89OQbGzgUXABatJxoL5khqXJvHR9-dnEJvIwNZFcXrJP2awuF3w0qbDr4g_KaPkOWAWSdPB-qnXUJEVN6mdGLu37fwPEHdgW4oeym45_0wTRf-NJYIHbR',
//       };

//       await admin.messaging().send(message);
//     }

//     console.log('Notifications sent successfully.', titleColumn);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Notifications sent based on Google Sheets data', titleColumn }),
//     };
//   } catch (error) {
//     console.error('Error:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };


// const admin = require('firebase-admin');
// const { google } = require('googleapis');

// // Initialize Firebase Admin SDK with service account credentials
// const serviceAccount = require({
//   "type": "service_account",
//   "project_id": "firestorenotify-18950",
//   "private_key_id": "4e8cd454d39b6685065247a740bc94e257ce7861",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCucGRZVZ2b5a3F\n94xXbIn5aZl7LUxQN7KiYLFsT1NHqcxTPjRH/q+I4RRnWtHQL+emtvWq5Pf93BXh\nV3Auab+iXbIp+lIWxwXYQj6+5kXk+w75bxvmw0tZOVaGLh0Foa8GhhSGWluBej61\nyANCQuLqcApoUcezeVbuD0TaBo7V+wdzKcMZeSSwPzz8gWsAa7uU41ZVFeauTU1z\nOPDLPhdHaLLy4Vcc/GAkZmJLAvg7O48ouwOcvp1QSh673GTIYoVIhli0cneHj3rW\nIf4Pj/R6f7kXP0uzg9Xlhk+I7opp1ellDBx2vKv0Ef7uE+FYRMQJtM3jVUiyXAV2\n/bICxSkxAgMBAAECggEABIbabPMPZwBuIrt4QwUael/CKuFvDbC455dENbbotH89\nr3YwgEeBRlvtgp9ncZ18owo0JrmZjVcWEI8dnW/ehfNtXgwUgiDPxwR9pciTuudX\nRJGKSfafLBe4+GED+KWVoMD/bMkjNeqIou65+loUktgJM/Zn6G8gY6u2DY5hua3L\nJx8AYPjYOvbMnOi2Tnob81b7xEtk0u0cFX0GC3TfjvqDbO9b7QdqOCwBCnD7bSI3\nqTivNR2NyPmCIjKKtREMRiqgDpoqyTozk2bywI3DOdS3BCdCcDovkvhoNd1w+utS\n2S+fzptBWYCy/dLE/UmhPyWI+piVKleXVIbFtHkuEQKBgQDkk4ThimFNcmMDVvDO\nXpppxjXIgTbuUtLHvpyxbPY7dWVrhv6zbfHYgmZ7YOm8QlNWL37gYPfLg5uWs6J1\nqxCwNjjHUuJKmpmxlRmnbo+qicLcY4vJ4V+kXK4wEej+Pzx9EEs+CF/qhD714SMh\n5Hgi0G5r3r02s464zJ34NQzCdQKBgQDDXhrWxKV50OAuVjX2nhl21VqexgqgRgcs\n9M3GqTYjMQa5JpyaCOVxGEHSSjzSM0dHGZE6Kjj/OLbsSHacJe+5iUEgbn8ADYS0\n/inh2n0bckM9S1iLQI3kVbCofNvKFd39ckrsPqLzKwFuH+vJh2dEfbBrarHIDky2\n5Z9R7QZ8TQKBgDZ9MDUv7sgul4npRNh9VuQWOyYEH5sqpVK2jtYA+qXr83RxpvAR\nKpEJbPLGhJG7YfBuvBkzJH8gbYu8YOMaF41aL6jcilNsjWz29Tmjsp3d31T4ag+D\nKXCeI2wUKO3LF1lc9ALirjLSucuVkvF2bGkoNNqEK6kJnuFQ7euIgfUtAoGBAJpb\ni9EMZcGtarKxoslLeMsPHx47UsH3EkxOzxabMw7y+WDoROrfBIkqpTbFOPDLWxGt\n/bR7D7V21fAyAKS2xIVPEInTQ7yC8cse1XCA9D/vM3kGQtsjEfjKS12T6QPt6wsI\ndnHZu11tKSAdUGpV9R2EQRNdpUFvKuWG3y4Xm/wxAoGBAIBnptDCYi8O1PGGJU7s\nAPcjoJbL7tTEg9pou76OxbZnuofQTeX6ORXyVRDGhZY2ZI+kYHMoz/TyEVJeBbfS\nnzvPW91juwO6hvAvVM+HSVeHRCiCls6h+1P0/Q5GkB6LbiDXbJ6h8tDNwPItf6xq\ndOgFzC9rqyq/DsXGkFFltZ98\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-nzrfh@firestorenotify-18950.iam.gserviceaccount.com",
//   "client_id": "107631592900111352151",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nzrfh%40firestorenotify-18950.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// });

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   // databaseURL: 'https://firestorenotify-18950.firebaseio.com',
//   messagingSenderId: '25988846759 ',
// });

// exports.handler = async () => {
//   try {
//     // Your existing Google Sheets API code to fetch data
//     const creds = {
//       "type": "service_account",
//       "project_id": "firestorenotify-18950",
//       "private_key_id": "b64e031248be5e9d9f95480141d74530bad1b371",
//       "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCdFu2VG7E9K/8/\nP20h74XPIMQ6Beq2jf0fiFDPEjEb6TXIhUbR3CijPBHW0rgCJOZ5kuKftMHPTgTc\nlyhwpr3JLHbC/gFIs8zcQvYqH5z7hVBsovJvt2wO4WZJS7ZyERcQPXBIwCoV0ENP\n4JGy2UAWoLUY+trDnEz1F9bos5hxNXHnx3L3BVELBfU77ZoEGt4xOgb9qtb1oBwE\nzX/3nIf6cmiuetclLhwkUe7KmCEA3hyjpX7+cwXK/Rl9y1vX+5VQIxiCxuDoI6GT\nrq7O3b88mGG+Ox5dvGbvOQ57POjNNdXvfyJOxyizB2XmZZy4F59NrEIQeIMvD4Vz\nP3F7hHwlAgMBAAECggEABO/bMvbLgNxTdEhpBJ+uI+P9ZsQYK/lAaET0zTKJf+gP\nZv2RS+J7Fc47J/Y4DuaGpnF6/9aYH2IYqFoed5PgnmRFreZ6Ydo3aQC4aHsqiC5u\nEvaitJIeKkWOh7qCbF6kdpUyZIbti6v07EYRg35tE4j6HWPc4OLrpD7wjnWpJ9L1\nN4RuYPK6EwWeiXBm2jAhR0VdIcBYCi21kE3f3ZGv7boGCVN41m6XYugb0CqUpp9a\n3NMrjJuvfQ/xNBKl2RPvXalai8qRz0Z3/CuLryvjLxlqf/vtKOe5desSO2vLvE+j\neAx98Oym0AUWNEWApVxB+Luk5y65es8yZ1XAPJmbrQKBgQDS5cDIV3kz+KMcmT/8\nrQimc0Zi5dtRolccwUJLYnhgHWJo/arpMoyNJQeygEciAOSsEzv8LknZjDVhr5yU\nxL8dJGCeBKxG2vjaHiQM6uuancuFuaubXmHfbRKoVZ2Kt2EreZyRwUGi8IjDMc+3\nwQUljDcUEm2O0ktKsr2l5/zG0wKBgQC+r0qVkhxUs/ZaTl/av/nMbZ7oG5rDnRAa\ne2uyb2l9fZy6CzEwNRLvd/+x9eolgVH1SRsefuLaXkFd5iXr27RlvjXg5CIb33nW\ngH8CK0KECWjarwlCLe+iW8Kyu4PhKJf/TtIeMaM4M3J38iWA2CKs10GvZt4Auace\nY4R1ZfnGJwKBgBfvd3fFZb4eQ/Tk97wnr0mk36It0DxtnlFnJa0EmgDelOKxl4or\n8IO8Zik+IdScIVfePvqaDkugfBaAJddElSQrksOcaCkKhR/MN+83YlIEAqtErVNO\n3PDMokd0oBK0SVTz0m9AbcCeaAcvShHi2ECwrzeZ99Ez0NPDgX6o26l9AoGAQ0cv\nxpQVwOD6E6TBdzny1ej7fyN2OHxrGRzgw8VBcBBows9+HGctdiZdphmA8pitJSEV\nG25jde55m7q/OHd9L8Sr19xGGJWBtGgD5+0Be/qh7z6AwsPYX+2GRW+ZuVCMSH0z\n74lN8F9ejOl3x/z6Rwdv2oYt4A2g5DzymEVRmlMCgYAq53+9Bh8Uutc2EvaozEHx\nCXxYqPel+q9dz1fn0/CwY+BpNH+WBUfpApHiaMxqcVInRiHFEC61803S+83pOukX\n1z49w0CCfL5xnf52HyPKBEXq0p8dXjvC2aHqvLIRkJbuxFsfS37GgvH2nuyltlN+\n9WLRimAOkQ6ICeThyJetEw==\n-----END PRIVATE KEY-----\n",
//       "client_email": "firestorenotify-18950@appspot.gserviceaccount.com",
//       "client_id": "113142074577819649506",
//       "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//       "token_uri": "https://oauth2.googleapis.com/token",
//       "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//       "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firestorenotify-18950%40appspot.gserviceaccount.com",
//       "universe_domain": "googleapis.com"
//     };
    
//     const auth = new google.auth.GoogleAuth({
//       credentials: creds,
//       scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly',
//     });

//     const sheets = google.sheets({ version: 'v4', auth });
//     const spreadsheetId = '1y8sEdrpvxzD_R5hqWc7d9bgyqucnT4IEVc66AbBmlUY'; // Replace with your spreadsheet ID
//     const range = 'Sheet1!A:A'; // Replace with the range of data you want to retrieve

//     const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
//     const titleColumn = response.data.values || [];

//     // Loop through the fetched data to send Firebase push notifications
//     for (let i = 0; i < titleColumn.length; i++) {
//       const title = titleColumn[i][0];
//       const message = {
//         notification: {
//           title: 'Google Sheets Notification',
//           body: `Notification: ${title}`,
//         },
//         // Add any additional data if needed
//         data: {
//           key: 'value',
//         },
//         // Replace with the device token(s) you want to send notifications to
//         token: 'cD1eQe2kBVNwI7x6HuwuVY:APA91bGAFi6p-N_TVvbNRzK89OQbGzgUXABatJxoL5khqXJvHR9-dnEJvIwNZFcXrJP2awuF3w0qbDr4g_KaPkOWAWSdPB-qnXUJEVN6mdGLu37fwPEHdgW4oeym45_0wTRf-NJYIHbR',
//       };

//       await admin.messaging().send(message);
//     }

//     console.log('Notifications sent successfully.', titleColumn);

//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Notifications sent based on Google Sheets data', titleColumn }),
//     };
//   } catch (error) {
//     console.error('Error:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Internal Server Error' }),
//     };
//   }
// };



const admin = require('firebase-admin');
const { google } = require('googleapis');

// Initialize Firebase Admin SDK with service account credentials
const serviceAccount = {
  "type": "service_account",
  "project_id": "firestorenotify-18950",
  "private_key_id": "4e8cd454d39b6685065247a740bc94e257ce7861",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCucGRZVZ2b5a3F\n94xXbIn5aZl7LUxQN7KiYLFsT1NHqcxTPjRH/q+I4RRnWtHQL+emtvWq5Pf93BXh\nV3Auab+iXbIp+lIWxwXYQj6+5kXk+w75bxvmw0tZOVaGLh0Foa8GhhSGWluBej61\nyANCQuLqcApoUcezeVbuD0TaBo7V+wdzKcMZeSSwPzz8gWsAa7uU41ZVFeauTU1z\nOPDLPhdHaLLy4Vcc/GAkZmJLAvg7O48ouwOcvp1QSh673GTIYoVIhli0cneHj3rW\nIf4Pj/R6f7kXP0uzg9Xlhk+I7opp1ellDBx2vKv0Ef7uE+FYRMQJtM3jVUiyXAV2\n/bICxSkxAgMBAAECggEABIbabPMPZwBuIrt4QwUael/CKuFvDbC455dENbbotH89\nr3YwgEeBRlvtgp9ncZ18owo0JrmZjVcWEI8dnW/ehfNtXgwUgiDPxwR9pciTuudX\nRJGKSfafLBe4+GED+KWVoMD/bMkjNeqIou65+loUktgJM/Zn6G8gY6u2DY5hua3L\nJx8AYPjYOvbMnOi2Tnob81b7xEtk0u0cFX0GC3TfjvqDbO9b7QdqOCwBCnD7bSI3\nqTivNR2NyPmCIjKKtREMRiqgDpoqyTozk2bywI3DOdS3BCdCcDovkvhoNd1w+utS\n2S+fzptBWYCy/dLE/UmhPyWI+piVKleXVIbFtHkuEQKBgQDkk4ThimFNcmMDVvDO\nXpppxjXIgTbuUtLHvpyxbPY7dWVrhv6zbfHYgmZ7YOm8QlNWL37gYPfLg5uWs6J1\nqxCwNjjHUuJKmpmxlRmnbo+qicLcY4vJ4V+kXK4wEej+Pzx9EEs+CF/qhD714SMh\n5Hgi0G5r3r02s464zJ34NQzCdQKBgQDDXhrWxKV50OAuVjX2nhl21VqexgqgRgcs\n9M3GqTYjMQa5JpyaCOVxGEHSSjzSM0dHGZE6Kjj/OLbsSHacJe+5iUEgbn8ADYS0\n/inh2n0bckM9S1iLQI3kVbCofNvKFd39ckrsPqLzKwFuH+vJh2dEfbBrarHIDky2\n5Z9R7QZ8TQKBgDZ9MDUv7sgul4npRNh9VuQWOyYEH5sqpVK2jtYA+qXr83RxpvAR\nKpEJbPLGhJG7YfBuvBkzJH8gbYu8YOMaF41aL6jcilNsjWz29Tmjsp3d31T4ag+D\nKXCeI2wUKO3LF1lc9ALirjLSucuVkvF2bGkoNNqEK6kJnuFQ7euIgfUtAoGBAJpb\ni9EMZcGtarKxoslLeMsPHx47UsH3EkxOzxabMw7y+WDoROrfBIkqpTbFOPDLWxGt\n/bR7D7V21fAyAKS2xIVPEInTQ7yC8cse1XCA9D/vM3kGQtsjEfjKS12T6QPt6wsI\ndnHZu11tKSAdUGpV9R2EQRNdpUFvKuWG3y4Xm/wxAoGBAIBnptDCYi8O1PGGJU7s\nAPcjoJbL7tTEg9pou76OxbZnuofQTeX6ORXyVRDGhZY2ZI+kYHMoz/TyEVJeBbfS\nnzvPW91juwO6hvAvVM+HSVeHRCiCls6h+1P0/Q5GkB6LbiDXbJ6h8tDNwPItf6xq\ndOgFzC9rqyq/DsXGkFFltZ98\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-nzrfh@firestorenotify-18950.iam.gserviceaccount.com",
  "client_id": "107631592900111352151",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nzrfh%40firestorenotify-18950.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: 'https://firestorenotify-18950.firebaseio.com',
  messagingSenderId:'25988846759 ',
});

exports.handler = async () => {
  try {
    // Your existing Google Sheets API code to fetch data
    const creds = {
      
        "type": "service_account",
        "project_id": "firestorenotify-18950",
        "private_key_id": "2b287d57647273b0ac53a9899497f5ad184c9120",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCnEmddW3nl0b38\nhoh2fmCqMkSOfXb36MnnRAE3MmoBZ3DMiTm51uNVrn4ygxzbWC4+d9ip98wI1J4b\nJ895QtnkbMXg3TAQKL8A9PgqMTovALwEsM0UurJM7RtcCfYa3myqCMLQUvy5h9fd\nFUyq876feceDU0K6NWdOrAam8BTsuckfzWGzx55Uu5ujEIGKltJ+hrUIr81aBds9\n6jvh1AQPliE/jftJ1Zo8R6sJd4ONsXH/qKRmiYOUbwYinh6vd6xjm6HmM9C8okrV\n2QzoWJhn2HZ0pVdSlY7LtK7SbN8NvAFtCWEIWoWlI9gwueg+f2afWWcYbY0znBHf\nghW6Z12DAgMBAAECggEADaX9Z2KEMZ1HTycHDzW2xuCcD3nkwKQ17kcfbvdsMoN/\n8wLuLNDcZHurQowfIjTGHlijDLY6Eanw5UNaJHasydza83TjqsZGsu4ljH4rWdCj\ntiG4DI6jPJE4JXYzh9wOINEzZ6+yhqONeQ724uujnG/nN8K9q5brmBaJ5T8CrpiY\nM+LkIY9SOAu0VNzQCLqE3Th6C6tlbqwKFtvOZb5W96+H7Wjb0LzfWfT58JFIIvBT\n11/+968f2djm+soMVFjrNg0NpMbgcMOYCADJs6Zp0/iY3s3n+J3gquWUCF5JzpRS\n3OGPEraN+xUqzEa7Gk4ja3Dn2vjDQLp+irxLS7XO6QKBgQDjrePHxfvvXgEf7ksV\nBhk6G1wJHwIxlGoashcDZCPGINUnR/7vA4yI3oqemi1JZ5JmBaBO8y8yiOYqilW7\n5FGOZk9S9Nh/xQE24UdbnBZMls26gmWfvnlw4NbAnCNbWpY/XvPXGDIQwGsvmF1E\nccc9PRlKpnaaQUh5Vr9178+4KwKBgQC72o/PQRgAL5wHuYesmOXKUeeYuTooy2lV\nWN2wKiJcdD+vGQAhZ5q1sdjyQNV5YBOEhQavBpEIV4S0wD9wSGApyRodry2X9azR\nkue6YMI2qdYSe336AIxcGvE8VpyMAJJV4ILVOkhxwUIvBnD9zdLVFHxYaZ11TU0O\nVZrQ0ZesCQKBgB4KSH6IUdhgV9elskRg3J09FOSjMb/m7CT/kGfDI7E1jco0Bp/0\noOtCKZoJj6Yaw0cwwNkJ3xVU2MGOJQe4dUZLm3W/ln0tOh7KlIayzoJmd1h/cfck\nw5MwJ0WclFGuXxqXZabgq2JocPwDp3KrbHVZBWhDFGz/5hcUagiejpKnAoGBAIpH\nnqifb/1jDmYZSifg/PXrSKIBZzB0W3s5ySZOPbD02ZQYwSHV0+p/mgTpeLq54GQi\nUAMywDv1wHgVNB2BCVh48kJ7mwJLFAXJL87gPtZiOnSsdtU65hc+tekGkIH2QcH5\nXBV9q6og6okXIsGRaurzA31JcWDRoDE3Dpk8T3uRAoGBALHgog8MzwTsOzzZsl2x\n7cL218O2TQuCPssQXDw4bTbyqDtdGDiVUIfJopUy/gfwEQs1zeiHGpCvMJeeYYVn\nK0UMQR1PYazxkn2OPWyaSccn+lRbt7/M+gKMw7VzDR43Z/bg/iPUiIWiAf4e6axv\nKMQt/uEE/yjDMGnSL+3GigDR\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-nzrfh@firestorenotify-18950.iam.gserviceaccount.com",
        "client_id": "107631592900111352151",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nzrfh%40firestorenotify-18950.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      
      
    }
    const auth = new google.auth.GoogleAuth({
      credentials: creds,
      scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1y8sEdrpvxzD_R5hqWc7d9bgyqucnT4IEVc66AbBmlUY'; // Replace with your spreadsheet ID
    const range = 'Sheet1!A:A'; // Replace with the range of data you want to retrieve

    const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
    const titleColumn = response.data.values || [];

    // Loop through the fetched data to send Firebase push notifications
    for (let i = 0; i < titleColumn.length; i++) {
      const title = titleColumn[i][0];
      const message = {
        notification: {
          title: 'Google Sheets Notification',
          body: `Notification: ${title}`,
        },
        // Add any additional data if needed
        data: {
          key: 'value',
        },
        // Replace with the device token(s) you want to send notifications to
        topic: 'general',
      };

      await admin.messaging().send(message);
    }

    console.log('Notifications sent successfully.', titleColumn);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notifications sent based on Google Sheets data', titleColumn }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

