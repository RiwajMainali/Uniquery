axios = require('axios');
promise = axios.get('https://www.google.com/search?q=test');

promise.then(function(response){
  htmlSource = response.data
  getLinksFromHtml(htmlSource);
});

function getLinksFromHtml(htmlString) {
  // Regular expression that matches syntax for a link (https://stackoverflow.com/a/3809435/117030):
  LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;

  // Use the regular expression from above to find all the links:
  matches = htmlString.match(LINK_REGEX);

  // Output to console:
  console.log(matches);

  // Alternatively, return the array of links for further processing:
  return matches;
}