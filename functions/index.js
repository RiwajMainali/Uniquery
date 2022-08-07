const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');

  if (req.body.message === undefined) {
    res.status(400).send({error: 'No message defined!'});
    return res.status(200).json({});
  } 
  else {
    console.log(req.body.message);
    res.status(200).send({data: 'Success: ' + req.body.message});
    return res.status(200).json({});
  }
  
  //return response.status(200).json({status : "success"});
});
