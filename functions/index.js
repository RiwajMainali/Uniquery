const functions = require("firebase-functions");
//const unicrawl = require('../src/unicrawl.js');
const axios = require("axios")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.test = functions.https.onCall((data, context) => {
  //const output = unicrawl.ScrapeEnginesAtPage("Test")

  return "Hello";
  //return response.status(200).json({status : "success"});
});
