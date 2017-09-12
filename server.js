var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:ArticleName', function (req,res) {
    var ArticleName = req.params.ArticleName;
    res.send(createTemplate(Article-A[ArticleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
