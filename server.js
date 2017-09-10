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
app.get('/article/:article.html', function (req, res) {
  
  pool.query("SELECT * FROM article WHERE title = $1", [req.params.article.html], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(404).send('<body bgcolor=Blue><strong><b><h1><p style="font-size:100px,color:red;">HELLO WORLD</h1></b></strong></body>');
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
