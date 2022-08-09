const functions = require("firebase-functions");
//const unicrawl = require('../src/unicrawl.js');
const axios = require("axios")
const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.test = functions.https.onCall((data, context) => {
  //const output = unicrawl.ScrapeEnginesAtPage("Test")
  try{
    axios.get('https://www.bing.com/search?q=pizza', {
      headers : {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    .then((response) => {
    console.log("Test 2")

    // Regex Configuration //
    let LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    let matches = response.data.match(LINK_REGEX);

    // Filter Configuration //
    let searchArray = ['google', 'yandex', 'bing', 'w3', 'yastatic']


    // Filter Results //
    const texts = matches
      .filter(element => searchArray.every(
        substr => !element.includes(substr)
    ));

    console.log(texts)

    return texts;
    })
  } catch(error) {
    console.log(error)
  }

  return "Loss"
  //return response.status(200).json({status : "success"});
});
