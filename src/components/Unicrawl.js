// Get Dependencies //
axios = require('axios');

// TEST INPUT //
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
  
readline.question('Enter search query : ', input => {

  promise = axios.get('https://www.google.com/search?q=$' + input);

  promise.then(function(response){
    htmlSource = response.data
    linksFromHtml(htmlSource);
  });

  readline.close();
});
// REMOVE ON RELEASE //

function scrapeEngine(engine, input, customFilter) {
    promise = axios.get('https://www.google.com/search?q=$' + input);

    promise.then(function(response){
      htmlSource = response.data
      linksFromHtml(htmlSource);
    });

    return linksFromHtml(htmlString);
}

// This function will return a table of strings that contain URLs found by a search. //
function linksFromHtml(htmlString, customFilter) {

  // Regex Configuration //
  LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  matches = htmlString.match(LINK_REGEX);
  
  // Filter Configuration //
  searchArray = ['google']
  searchArray = searchArray.concat(customFilter)

  // Filter Results //
  const texts = matches
    .filter(element => searchArray.every(
      substr => !element.includes(substr)
  ));

  // TEST OUTPUT //
  for (const text of texts) {
    console.log(text);
  }
  // REMOVE ON RELEASE //

  return matches;
}