var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
 counter = counter + 1;
 res.send(counter.toString());
});

app.get('/article-1', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-1.html'));
});
app.get('/article-2', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'article-2.html'));
});
app.get('/article-3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-3.html'));
});
app.get('/article-4', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-4.html'));
});
app.get('/article-5', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-5.html'));
});
app.get('/article-6', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-6.html'));
});
app.get('/article-7', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-7.html'));
});
app.get('/article-8', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-8.html'));
});
app.get('/article-9', function (req, res) 
'<!DOCTYPE html><html><head><style>body {background-image: url("http://www.servnetuk.com/sites/default/files/servnet_slider_3_4.jpg");}</style><p style="font-size:75px;"><strong><b>Article-9 | Dhakshith</b></strong><div><p style="font-size:36px;"><a href="/">Home</a></div><hr/><button type="button" onclick="document.getElementById('demo').innerHTML = Date()">Click me to display Date and Time.</button><p id="demo"></p><div><p style="font-size:50px;"><strong><b>Hi!This is my 9th article!</b></strong></div><img id='pokeball'src="http://fullhdpictures.com/wp-content/uploads/2016/09/Sceptile-Pictures.png" width="500" height="500"></body></html>';
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/MyProfile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Profile.html'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
