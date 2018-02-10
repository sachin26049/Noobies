const express = require('express');
const router = express.Router();
var https = require('https');

// Register


/*router.get('/Load', (req, res, next) => {
  var http = require("https");
  url="https://api.data.gov.in/resource/98fa254e-c5f8-4910-a19b-4828939b477d?format=json&api-key=579b464db66ec23bdd000001f62425dde03841ec4580dd59c955a985";
  var request = https.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    });

    response.on("end", function (err) {
      // finished transferring data
      // dump the raw data
      //console.log(buffer);
      console.log("\n");
      data = JSON.parse(buffer);
      //console.log(data);
      res.json({data:data.records});
  });*/
  
  router.post('/LoadByCurrentLocation', (req, res, next) => {
    loc=req.body.location;
    var http = require("https");
    url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+loc+"&rankby=distance&types=hospital&key=AIzaSyBVBi8lfnMyEFbn1rmpS81C0pe2N8ZFWLU";

    var request = https.get(url, function (response) {
      // data is streamed in chunks from the server
      // so we have to handle the "data" event    
      var buffer = "", 
          data,
          route;
  
      response.on("data", function (chunk) {
          buffer += chunk;
      });
  
      response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        //console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);
        //console.log(data);
        res.json({success:true,data:data.results});
    });



});
});

router.post('/LoadByLocationName', (req, res, next) => {
  loc=req.body.location;
  var http = require("https");
  url="https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+"+loc+"&key=AIzaSyBVBi8lfnMyEFbn1rmpS81C0pe2N8ZFWLU";

  var request = https.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event    
    var buffer = "", 
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    });

    response.on("end", function (err) {
      // finished transferring data
      // dump the raw data
      //console.log(buffer);
      console.log("\n");
      data = JSON.parse(buffer);
      //console.log(data);
      res.json({success:true,data:data.results});
  });



});
});




module.exports = router;
