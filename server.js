const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const $ = require("jquery")(window);

//Each router sends files to the client browser
//As of now we are sending all of the files to the browser

router.get('/',function(req,res){
  res.sendFile(__dirname+'/home.html');
});

router.get('/home.css',function(req,res){
  res.sendFile(__dirname+'/home.css');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
