const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//app.use(express.json())
//const { JSDOM } = require( "jsdom" );
//const { window } = new JSDOM( "" );
//const $ = require("jquery")(window);

//Each router sends files to the client browser
//As of now we are sending all of the files to the browser

const fs = require('fs')
fs.readFile('./businessdata.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString)
})

router.get('/',function(req,res){
  res.sendFile(__dirname+'/home.html');
});

router.get('/home.css',function(req,res){
  res.sendFile(__dirname+'/home.css');
});

router.get('/about',function(req,res){
  res.sendFile(__dirname+'/about.html');
});

router.get('/directory',function(req,res){
  res.sendFile(__dirname+'/directory.html');
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

router.get('/businessdata.json',function(req,res){
  res.sendFile(__dirname+'/businessdata.json');
});

router.get('/people',function(req,res){
  res.sendFile(__dirname+'/people.json');
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Hello Andrew Tehe...');
console.log('Running at Port 3000');
