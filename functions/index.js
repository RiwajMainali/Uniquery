const functions = require("firebase-functions");
//const unicrawl = require('../src/unicrawl.js');
const axios = require("axios")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.test = functions.https.onCall((data, context) => {
  //const output = unicrawl.ScrapeEnginesAtPage("Test")
  axios.get('https://www.google.com/search?q=$' + input + "&start=" + (10 * (page_number - 1)), {
    headers:{}
  }).then((response) => {
    // Regex Configuration //
    let LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
    let matches = response.match(LINK_REGEX);

    // Filter Configuration //
    let searchArray = ['google', 'yandex', 'bing', 'w3', 'yastatic']
    searchArray = searchArray.concat(customFilter)

    // Filter Results //
    const texts = matches
      .filter(element => searchArray.every(
        substr => !element.includes(substr)
    ));


    // TEST OUTPUT //
    //for (const text of texts) {
    //  console.log(text);
    //}
    // REMOVE ON RELEASE //

    return texts;
  }).catch((error) => {
    console.log(error)
  });
  

  return "Hello";
  //return response.status(200).json({status : "success"});
});
