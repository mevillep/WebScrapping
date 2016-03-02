var request = require('request');
var express = require('express');
var fs = require('fs');
var cheerio = require('cheerio');
var bodyParser = require('body-parser')
var  app = express()
var tits = [];

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
    //http://jsonplaceholder.typicode.com/users
    
request('http://www.firstpost.com/category/india', function (error, response, body) {
  if (!error && response.statusCode == 200) {
   
    $ = cheerio.load(body);
    
   
     $(".top_stories ul li a").each(function(i, elem){
     
         tits[i] = $(this).attr('title');
         
     });

   console.log(tits); 
   
  }
})

  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});