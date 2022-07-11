axios = require('axios');

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


function linksFromHtml(htmlString) {
  LINK_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  matches = htmlString.match(LINK_REGEX);
  
  searchArray = ['google']

  const texts = matches
    .filter(element => searchArray.every(
      substr => !element.includes(substr)
  ));

  for (const text of texts) {
    console.log(text);
  }

  return matches;
}