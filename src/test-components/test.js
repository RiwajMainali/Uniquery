axios = require('axios');
promise = axios.get('https://www.google.com/search?q=test');

promise.then(function(response){
  htmlSource = response.data
  linksFromHtml(htmlSource);
});

function linksFromHtml(htmlString) {
  LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  matches = htmlString.match(LINK_REGEX);
  return matches;
}