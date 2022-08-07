const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.test = functions.https.onCall((data, context) => {
  //res.set('Access-Control-Allow-Origin', '*');

  return "hello"
  //return response.status(200).json({status : "success"});
});
