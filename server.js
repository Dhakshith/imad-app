var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});
app.get('/article-1', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'article-1.html'));
});
app.get('/article-2', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'article-2.html'));
});
app.get('/article-3', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'article-3.html'));
});
app.get('/article-4', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'article-4.html'));
});
app.get('/article-5', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'article-5.html'));
});
app.get('/article-6', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'article-6.html'));
});
app.get('/article-7', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'article-7.html'));
});
app.get('/article-8', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'article-8.html'));
});
app.get('/MyProfile', function (req,res) {
    res.sendFile(path.join(dirname, 'ui', 'Profile.html'));
});

var port = 8080;
app.listen(8080, function () {
    "IMAD course app listening on port 8080";
});