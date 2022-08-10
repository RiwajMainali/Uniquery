const functions = require("firebase-functions");
//const unicrawl = require('../src/unicrawl.js');
const axios = require("axios")
const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

async function GetGoogleResults(input, page_number = 1) {
  // Scrape Google for results
  // https://www.google.com/search?q=$pizza will get page 1.
  // https://www.google.com/search?q=pizza&start=10 will get page 2, https://www.google.com/search?q=pizza&start=20 will get page 3.

  return await axios.get('https://www.google.com/search?q=$' + input + "&start=" + (10 * (page_number - 1)), {
    headers:{}
  }).then((response) => {
    return LinksFromHtml(response.data);
  }).catch((error) => {
    console.log(error);
    return 0;
  });

}

async function GetBingResults(input, page_number = 1) {
  // Scrape Bing for results.
  // https://www.bing.com/search?q=pizza
  // https://www.bing.com/search?q=test&first=11 will get page 2, https://www.bing.com/search?q=test&first=21 will get page 3.

  return await axios.get('https://www.bing.com/search?q=' + input + '&first=' + (10 * (page_number - 1)), {
    headers:{}
  }).then((response) => {
    return LinksFromHtml(response.data);
  }).catch((error) => {
    console.log(error);
    return 0;
  });
}

async function GetYandexResults(input, page_number = 1) {
  // Scrape Yandex for results.
  // https://yandex.com/search/?text=test&lr=109990&p=0
  // https://yandex.com/search/?text=test&lr=109990&p=1 will get page 2, https://yandex.com/search/?text=test&lr=109990&p=2 will get page 3.

  return await axios.get('https://yandex.com/search/?text=' + input + 'test&lr=109990&p=' + (page_number - 1), {
    headers:{}
  }).then((response) => {
    return LinksFromHtml(response.data);
  }).catch((error) => {
    console.log(error)
    return 0;
  });
}

async function LinksFromHtml(htmlString, customFilter) {

  // Regex Configuration //
  let LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  let matches = htmlString.match(LINK_REGEX);

  // Filter Configuration //
  let searchArray = ['google', 'yandex', 'bing', 'w3', 'yastatic']
  searchArray = searchArray.concat(customFilter)
  
  // Filter Results //
  const texts = matches
    .filter(element => searchArray.every(
      substr => !element.includes(substr)
  ));
  
  return texts;
}

async function Scrape(input, page_number = 1) {
  // Ensure correct input (Returns an error-code)
  if(input == ''){
    return -1;
  }
  if(page_number < 1){
    return -2;
  }
  if(page_number > 99){
    return -3
  }

  var results_table = []

  // Create table of results (Temporary, will be more robust in the future for getting stats.)
  results_table.push(await GetGoogleResults(input, page_number))
  results_table.push(await GetBingResults(input, page_number))
  results_table.push(await GetYandexResults(input, page_number))

  return results_table;
}


 exports.webcrawl = functions.https.onCall(async (input, page_number) => {
  return await Scrape(input, page_number)
});
