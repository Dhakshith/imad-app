var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
style = {
    content: `
    body {
    font-size: 20px;
    font-family: ar destine;
    background-color: #66FFAB;
}

.center {
    text-align: center;  
}
.container {
    padding-left: 20px;
    padding-right: 20px;
    max-width: 800px;
    margin: 0 auto;
    color: #FF732E;
    font-size: 20px;
    font-family: ar destine;
}
.text-big {
    font-size: 300%;
}

.bold {
    font-weight: bold;
}

.img-medium {
    height: 400px;
}
.button {
    background-color: brown; /* Green */
    border: inset;
    color: white;
    padding: 10px 70px;
    text-align: center;
    display: inline-block;
    font-size: 20px;
}
`
};
index = {
        content: `
        <!DOCTYPE html>
<html>
    <head>
        <link href="/style.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Dhakshith's IMAD app</title>
    </head>
    <body bgcolor="Blue" class="body">
       <div class="container">
        <div class="center text-big bold">
            <p style="color:brown;"></p><p style="font-size:50px;">Hello.
        </p></div>
        <div>
            <img id="pokemon" src="https://www.primagames.com/media/images/news/Pokemon-Go-big.jpg" class="img-medium">
        </div>
        <br>
        <div class="center text-big bold">
            <p style="color:brown;">
                This is Dhakshith's 1st webapp!
            </p>
        </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
        <hr>
        <h1 style="font-size:90px;color:green">My articles are as follows:</h1>
        <div class="button">
        <form action="http://sdhakshithraam.imad.hasura-app.io/article-1">
    <input type="submit" value="article One" />
</form><br>
        <form action="http://sdhakshithraam.imad.hasura-app.io/article-2">
    <input type="submit" value="article Two" />
</form><br>
        <form action="http://sdhakshithraam.imad.hasura-app.io/article-3">
    <input type="submit" value="article Three" />
</form><br>
        <form action="http://sdhakshithraam.imad.hasura-app.io/article-4">
    <input type="submit" value="article Four" />
</form><br>
        <form action="http://sdhakshithraam.imad.hasura-app.io/article-5">
    <input type="submit" value="article Five" />
</form><br>
        <form action="http://sdhakshithraam.imad.hasura-app.io/article-6">
    <input type="submit" value="article Six" />
</form><br>
        <form action="http://sdhakshithraam.imad.hasura-app.io/article-7">
    <input type="submit" value="article Seven" />
</form><br>
        <form action="http://sdhakshithraam.imad.hasura-app.io/article-8">
    <input type="submit" value="article Eight" />
</form></div>
        <hr>
        <h1 style="font-size:90px;color:green">
            This is my Profile:
        </h1>
        <div class="button"><form action="http://sdhakshithraam.imad.hasura-app.io/MyProfile">
    <input type="submit" value="My Profile" />
</form></div>
        <hr>
       </div>
    </body>
</html>
    `
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
  res.send(createTemplate(index));
});
app.get('/style.css', function (req, res) {
  res.send(createTemplate(style));
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
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
