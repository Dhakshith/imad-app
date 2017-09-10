var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
    user: 'sdhakshithraam',
    database: 'sdhakshithraam',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

var pool = new Pool(config);
app.get('/test-db', function (req,res) {
    //make a select request
    //return a response with the results
    pool.query('SELECT * FROM test', function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result.rows));
        }
    }
);
});
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

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:ArticleName', function (req,res) {
    var ArticleName = req.params.ArticleName;
    res.send(createTemplate(Article-A[ArticleName]));
});
            function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
}
app.get('/articles/:Article-A', function (req, res) {
  
  pool.query("SELECT * FROM article WHERE title = $1", [req.params.Article-A], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(404).send('Article not found');
          } else {
              var articleData = result.rows[0];
              res.send(createTemplate(articleData));
          }
      }
  }
);
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
user: 'rockerahul97',
database: 'rockerahul97',
host: 'db.imad.hasura-app.io',
port: '5432',
password: process.env.DB_PASSWORD
};
app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
title:'Article One | Rahul',
heading: 'Article One',
date: 'Aug 18, 2017',
content:<p>
Hello! Rahul, your content of first article is served here.
</p>
<p>
Hello! Rahul, your content of first article is served here.
</p>
<p>
Hello! Rahul, your content of first article is served here.
</p>
},
'article-two': {
title:'Article Two | Rahul',
heading: 'Article Two',
date: 'Aug 18, 2017',
content:<p>
Hello! Rahul, your content of second article is served here.
</p>
<p>
Hello! Rahul, your content of second article is served here.
</p>
<p>
Hello! Rahul, your content of second article is served here.
</p>
},
'article-three': {
title:'Article Three | Rahul',
heading: 'Article Three ',
date: 'Aug 18, 2017',
content:<p>
Hello! Rahul, your content of three article is served here.
</p>
<p>
Hello! Rahul, your content of three article is served here.
</p>
<p>
Hello! Rahul, your content of three article is served here.
</p>
}
};
function createTemplate(data){
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = 
<html>
<head>
<title>
${title}
</title>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div class="container">
<div>
<a href="/">Home</a>
</div>
<hr/>
<h3>
${heading}
</h3>
<div>
${date}
</div>
<div>
${content}
</div>
</div>
</body>
</html>
; 
return htmlTemplate;
}
app.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);
app.get('/test-db',function(req,res){
//Make a select request
//Return a response with the results
pool.query('SELECT * FROM test', function(err,res){
if(err){
res.status(500).send(err.toString());
}else {
res.send(JSON.stringify(result.rows));
}
});
});
app.get('/thankyou',function (req,res){
res.sendFile(path.join(__dirname, 'ui', 'thankyou.html'));
});
var counter=0;
app.get('/counter',function(req,res) {
counter = counter + 1;
res.send(counter.toString());
});
var names =[];
app.get('/submit-name',function(req,res){
//Get the name from the request
var name = req.query.name;//TODO

names.push(name);

res.send(JSON.stringify(names));
});
app.get('/:articleName',function (req,res){
var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});
app.get('/ui/madi.png', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/style.css', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
console.log(IMAD course app listening on port ${port}!);
});