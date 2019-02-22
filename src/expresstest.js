////var finalhandler = require('finalhandler')
////var http = require('http')
////var serveStatic = require('serve-static')
////
////// Serve up public/ftp folder
////var serve = serveStatic('C:/Users/sdavi/Documents/GetABoard/LoveLanguage/getaboardv2-Newupdate/src', {'index': ['email.js']})
////
////// Create server
////var server = http.createServer(function onRequest (req, res) {
////  serve(req, res, finalhandler(req, res))
////})
////
////// Listen
////server.listen(3000)
//const express = require('express')
//const app = express()
//const port = 3000
//app.all('/*', function(req, res, next) {
//  res.header("Access-Control-Allow-Origin", "*");
//  res.header("Access-Control-Allow-Headers", "X-Requested-With");
//  next();
//});
//
//app.post('/email', (req, res) => res.send('Hello World!'))
//
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});