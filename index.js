/**
 * @Author Adam Griffiths
 * @description A dev workflow example that might help your node.js project grow
 */

var examplemodule = require('dev-workflow-example-module');
var express = require('express');

var app = express();

app.get('/hello', function(req, res){
  res.send(examplemodule.sayhelloworld());
});

app.listen(3000);
console.log(examplemodule.sayhelloworld());
console.log('Goto http://localhost:3000/hello to see this message in your browser!');
