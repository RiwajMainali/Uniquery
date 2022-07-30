// Get Dependencies //
import { isString } from "@vue/shared";
import axios from "axios";
import * as readline from "readline";
import * as express from "express";
import * as cors from "cors";


// Test proxy //
express.use(cors({
  origin: 'https://google.com'
}))

express.get('/', (req, res) => {
  res.send("CORS Solved")
})

/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/jokes/random', (req, res) => {
  request(
    { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
*/

// remove on release //




// TEST INPUT //
/*
const new_readline = readline.createInterface({  
  input: process.stdin,
  output: process.stdout
});


new_readline.question('Enter search query : ', input => {
  ScapeEnginesAtPage(input, 10);
});
*/
// REMOVE ON RELEASE //



function GetGoogleResults(input, page_number = 1) {
  // Scrape Google for results
  // https://www.google.com/search?q=$pizza will get page 1.
  // https://www.google.com/search?q=pizza&start=10 will get page 2, https://www.google.com/search?q=pizza&start=20 will get page 3.

  const newURL = 'https://www.google.com'//'https://www.google.com/search?q=$' + input + "&start=" + (10 * (page_number - 1))
  const init = {
    method:'GET',
    mode: 'cors',
    headers: {
      "Accept": "application/json"
    }
  }
  const request = new Request(newURL, init)

  fetch(request).then((response) => {
    return response.json()
  }).then((html) => {
    console.log(html)
    LinksFromHtml(html)
  }).catch((error) => {
    console.log(error)
  })

  /*
  axios.get('https://www.google.com/search?q=$' + input + "&start=" + (10 * (page_number - 1)), {
    headers:{}
  }).then((response) => {
    LinksFromHtml(response.data);
  }).catch((error) => {
    console.log(error)
  });
  */

  return 0;
}

function GetBingResults(input, page_number = 1) {
  // Scrape Bing for results.
  // https://www.bing.com/search?q=pizza
  // https://www.bing.com/search?q=test&first=11 will get page 2, https://www.bing.com/search?q=test&first=21 will get page 3.

  axios.get('https://www.bing.com/search?q=' + input + '&first=' + (10 * (page_number - 1) + 1), {
    headers:{}
  }).then((response) => {
    LinksFromHtml(response.data);
  }).catch((error) => {
    console.log(error)
  });

  return 0;
}

function GetYandexResults(input, page_number = 1) {
  // Scrape Yandex for results.
  // https://yandex.com/search/?text=test&lr=109990&p=0
  // https://yandex.com/search/?text=test&lr=109990&p=1 will get page 2, https://yandex.com/search/?text=test&lr=109990&p=2 will get page 3.

  axios.get('https://yandex.com/search/?text=' + input + 'test&lr=109990&p=' + (page_number - 1), {
    headers:{}
  }).then((response) => {
    LinksFromHtml(response.data);
  }).catch((error) => {
    console.log(error)
  });

  return 0;
}

export function ScrapeEnginesAtPage(input, page_number = 1) {
    // Ensure correct input (Returns an error-code)
    console.log("Crawler was called with value : ", input)
    if(!isString(input)){
      return 0;
    }
    if(input == ''){
      return -1;
    }
    if(page_number < 1){
      return -2;
    }
    if(page_number > 99){
      return -3
    }

    let results_table = []

    // Create table of results (Temporary, will be more robust in the future for getting stats.)
    results_table = results_table.concat(GetGoogleResults(input, page_number))
    //results_table = results_table.concat(GetBingResults(input, page_number))
    //results_table = results_table.concat(GetYandexResults(input, page_number))

    return results_table;
}

// This function will return a table of strings that contain URLs found by a search. //
export function LinksFromHtml(htmlString, customFilter) {

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
  

  // TEST OUTPUT //
  for (const text of texts) {
    console.log(text);
  }
  // REMOVE ON RELEASE //

  return matches;
}
