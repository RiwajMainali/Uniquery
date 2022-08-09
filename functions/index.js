const functions = require("firebase-functions");
//const unicrawl = require('../src/unicrawl.js');
const axios = require("axios")
const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.test = functions.https.onCall((data, context) => {
  //const output = unicrawl.ScrapeEnginesAtPage("Test")
  axios.get('https://www.google.com/search?q=$test&start=0')
  .then((response) => {
    console.log("Test 1")
    return "Success";
  }).catch((error) => {
    console.log("Test 2")
    return error;
  });
  

  return "This should not be possible";
  //return response.status(200).json({status : "success"});
});
