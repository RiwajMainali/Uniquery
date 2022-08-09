const functions = require("firebase-functions");
//const unicrawl = require('../src/unicrawl.js');
const axios = require("axios")
const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.test = functions.https.onCall((data, context) => {
  //const output = unicrawl.ScrapeEnginesAtPage("Test")

  axios.get('https://www.bing.com/search?q=pizza')
  .then((response) => {
    console.log("Test 1")
    // Regex Configuration //
    let LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    let matches = response.data.match(LINK_REGEX);

    // Filter Configuration //
    let searchArray = ['google', 'yandex', 'bing', 'w3', 'yastatic']
    searchArray = searchArray.concat(customFilter)

    // Filter Results //
    const texts = matches
      .filter(element => searchArray.every(
        substr => !element.includes(substr)
    ));

    return texts;
  }).catch((error) => {
    console.log("Test 2")
  });

  return "Loss"
  //return response.status(200).json({status : "success"});
});
