const functions = require("firebase-functions");
const { json } = require("stream/consumers");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.set('Access-Control-Allow-Origin', '*');
  response.send(json{"status" : "success"});
  
  return response.json({"status" : "success"}))
});
