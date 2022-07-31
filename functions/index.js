const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.handleCrawl = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')

    if (req.method === 'OPTIONS') {
        res.set('Access-Control-Allow-Methods', 'GET');
        res.set('Access-Control-Max-Age', '3600');
        res.status(204).send('');
      } else {
        res.json({status: 'ok'});
      }
})
