var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
articleSix ={
    content: `
        <!DOCTYPE html>
                  <html>
                        <head>    
                            <link href="/style.css" rel= "stylesheet" />
                            <title>
                                Article-6 | Dhakshith
                            </title>
                            <link href="style.css" rel="stylesheet" />
                        </head>
                        <body>
                            <div class="container">                    
                                <p style="font-size:75px;"><strong>Article-6 | Dhakshith</strong>
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <div>
                                    <p style="font-size:37px;"><a href="/">Home</a>
                                </div>
                                <p style="font-size:30px;color:red;font-family:arial"><span id="datetime"></span></p>
                                <script>
                                    var dt = new Date();
                                    document.getElementById("datetime").innerHTML = "September 18 2017";
                                </script>
                                <hr/>
                                </p>
                                <div>
                                    <p style="font-size:50px;">
                                        <strong><b>Hi !!! This is my 6th article</b></strong>
                                </div>
                                <img id = 'pokemon' src="https://media.giphy.com/media/bBIgzlc6cF2jC/giphy.gif" class="img-medium"/><br><br>
                            </div>
                        </body>
                  </html>`
};
articleFive ={
    content: `
        <!DOCTYPE html>
                  <html>
                        <head>    
                            <link href="/style.css" rel= "stylesheet" />
                            <title>
                                Article-5 | Dhakshith
                            </title>
                            <link href="style.css" rel="stylesheet" />
                        </head>
                        <body>
                            <div class="container">                    
                                <p style="font-size:75px;"><strong>Article-5 | Dhakshith</strong>
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <div>
                                    <p style="font-size:37px;"><a href="/">Home</a>
                                </div>
                                <p style="font-size:30px;color:red;font-family:arial"><span id="datetime"></span></p>
                                <script>
                                    var dt = new Date();
                                    document.getElementById("datetime").innerHTML = "September 18 2017";
                                </script>
                                <hr/>
                                </p>
                                <div>
                                    <p style="font-size:50px;">
                                        <strong><b>Hi !!! This is my 5th article</b></strong>
                                </div>
                                <img id = 'pokemon' src="https://media.giphy.com/media/bBIgzlc6cF2jC/giphy.gif" class="img-medium"/><br><br>
                            </div>
                        </body>
                  </html>`
};
articleFour = {
        content: `
        <!DOCTYPE html>
                  <html>
                        <head>    
                            <link href="/style.css" rel= "stylesheet" />
                            <title>
                                Article-4 | Dhakshith
                            </title>
                            <link href="style.css" rel="stylesheet" />
                        </head>
                        <body>
                            <div class="container">                    
                                <p style="font-size:75px;"><strong>Article-4 | Dhakshith</strong>
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <div>
                                    <p style="font-size:37px;"><a href="/">Home</a>
                                </div>
                                <p style="font-size:30px;color:red;font-family:arial"><span id="datetime"></span></p>
                                <script>
                                    var dt = new Date();
                                    document.getElementById("datetime").innerHTML = "September 18 2017";
                                </script>
                                <hr/>
                                </p>
                                <div>
                                    <p style="font-size:50px;">
                                        <strong><b>Hi !!! This is my 4th article</b></strong>
                                </div>
                                <img id = 'pokemon' src="https://media.giphy.com/media/bBIgzlc6cF2jC/giphy.gif" class="img-medium"/><br><br>
                            </div>
                        </body>
                  </html>`
    };
articleThree = {
        content: `
        <!DOCTYPE html>
                    <html>
                        <head>
                            <title>
                                Article-3 | Dhakshith
                            </title>
                            <link href="/style.css" rel= "stylesheet" />
                        </head>
                        <body>
                            <div class="container">
                            <p style="font-size:75px;"><strong>Article-3 | Dhakshith</strong>
                            <meta name="viewport" content="width=device-width, initial+scale=1" />
                            <div>
                                <p style="font-size:37px;"><a href="/">Home</a>
                            </div>
                            <hr/>
                            <p style="font-size:30px;color:red;font-family:arial"><span id="datetime"></span></p>
                                                <script>
                                                    var dt = new Date();
                                                    document.getElementById("datetime").innerHTML = "September 18 2017";
                                                </script>
                            <p id="demo"></p>
                            <div>
                                <p style="font-size:50px;">
                                    <strong><b>Hi!This is my 1st article</b></strong>
                            </div>
                            <img id = 'pokemon' src="https://s3-ap-southeast-2.amazonaws.com/images.assignment1.fit3140/anime/charizard/tumblr_mt8kfgi0TF1s29bhho1_500.gif" class="img-medium"/><br><br>
                        </body>
                    </html>`
    };
articleTwo = {
        content: `
    <!DOCTYPE html>
    <html>
        <head>
            <title>
                Article-2 | Dhakshith
            </title>
            <link href="/style.css" rel= "stylesheet" />
        </head>
        <body>
            <div class="container">
            <p style="font-size:75px;"><strong>Article-2 | Dhakshith</strong>
            <meta name="viewport" content="width=device-width, initial+scale=1" />
            <div>
                <p style="font-size:37px;"><a href="/">Home</a>
            </div>
            <hr/>
            <p style="font-size:30px;color:red;font-family:arial"><span id="datetime"></span></p>
                                <script>
                                    var dt = new Date();
                                    document.getElementById("datetime").innerHTML = "September 18 2017";
                                </script>
            <p id="demo"></p>
            <div>
                <p style="font-size:50px;">
                    <strong><b>Hi!This is my 1st article</b></strong>
            </div>
            <img id = 'pokemon' src="http://25.media.tumblr.com/tumblr_maxdexHDGJ1qcm0wfo1_500.gif" class="img-medium"/><br><br>
        </body>
    </html>`
    };
articleOne = {
        content: `
        <!DOCTYPE html>
                  <html>
                        <head>    
                            <link href="/style.css" rel= "stylesheet" />
                            <title>
                                Article-1 | Dhakshith
                            </title>
                            <link href="style.css" rel="stylesheet" />
                        </head>
                        <body>
                            <div class="container">                    
                                <p style="font-size:75px;"><strong>Article-1 | Dhakshith</strong>
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <div>
                                    <p style="font-size:37px;"><a href="/">Home</a>
                                </div>
                                <p style="font-size:30px;color:red;font-family:arial"><span id="datetime"></span></p>
                                <script>
                                    var dt = new Date();
                                    document.getElementById("datetime").innerHTML = "September 18 2017";
                                </script>
                                <hr/>
                                </p>
                                <div>
                                    <p style="font-size:50px;">
                                        <strong><b>Hi !!! This is my 1st article</b></strong>
                                </div>
                                <img id = 'pokemon' src="https://res.cloudinary.com/lmn/image/upload/fl_lossy,q_80/f_auto/v1/gameskinny/d063d2b775dee12a8cc73f05d7b9b589.png" class="img-medium"/><br><br>
                            </div>
                        </body>
                  </html>`
    };
function createTemplate (data) {
    var content = data.content;
    var htmlTemplate = `
            ${content}
        `;
        return htmlTemplate;
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-1', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-2', function (req, res) {
  res.send(createTemplate(articleTwo));
});
app.get('/article-3', function (req, res) {
  res.send(createTemplate(articleThree));
});
app.get('/article-4', function (req, res) {
  res.send(createTemplate(articleFour));
});
app.get('/article-5', function (req, res) {
  res.send(createTemplate(articleFive));
});
app.get('/article-6', function (req, res) {
  res.send(createTemplate(articleSix));
});
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
