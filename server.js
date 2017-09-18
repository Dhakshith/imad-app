var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
profile = {
    content: `
    <!DOCTYPE html>
    <html>
    <head>
    <link href="/style.css" rel="stylesheet"><title>My Profile</title><link rel="icon" type="image/gif" href="data:image/png;base64,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" />
    </head>
    <body><div class="container">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div>
                <p style="font-size:37px;"><a href="/">Home</a>
            </div>
            <div>
                <img id = 'pokemon' src="http://images.clipartpanda.com/boy-20clip-20art-RiAykqLLT.jpeg" height="400px" />
            </div><hr>
            <h1 style="font-size:70px;color:green">
                Personal
            </h1>
            <div>
                <h1 style="color:blue">
                    Hello Everyone!My name is Dhakshith Raam!!!
                </h1>
            </div><hr>
                <h1 style="font-size:70px;color:green">
                    Professional
                </h1>
            <div>
                <h1 style="color:blue">
                    I work at Vidhya Niketan Public School!!!
                </h1>
            </div>
            <hr/>
            <h2 style="color:green">
                A SIMPLE CLICKED TIMES COUNTER:
            </h2>
            <div class = "Footer">
                <h1>
                    This button <button id="counter" style="background-color: brown;padding: 15px 32px;"><p style="color: white;font-size: 17.5px">Click Me !</button> has been clicked <span id="count">0</span> times...
                </h1>    
            </div>
            <hr/>

            <script type="text/javascript" src="/main.js">
            </script>
            <div style="color: #FF0A0E;font-size: 30px"><ul>
                <li>
                    name1
                </li>
                <li>
                    name2
                </li>
                <li>
                    name3
                </li>
                </ul></div></div>
    </body>
</html>
`
};
articleEight = {
    content: `
        <!DOCTYPE html>
                  <html>
                        <head>    
                            <title>
                                Article-8 | Dhakshith
                            </title>
                            <link href="/style.css" rel="stylesheet" />
                        </head>
                        <body>
                            <div class="container">                    
                                <p style="font-size:75px;"><strong>Article-8 | Dhakshith</strong>
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
                                        <strong><b>Hi !!! This is my 8th article</b></strong>
                                </div>
                                <img id = 'pokemon' src="http://www.pkparaiso.com/imagenes/xy/sprites/animados/aggron-2.gif" width="300px" /><br><br>
                            </div>
                        </body>
                  </html>`
};
articleSeven = {
    content: `
        <!DOCTYPE html>
                  <html>
                        <head>    
                            <link href="/style.css" rel= "stylesheet" />
                            <title>
                                Article-7 | Dhakshith
                            </title>
                            <link href="style.css" rel="stylesheet" />
                        </head>
                        <body>
                            <div class="container">                    
                                <p style="font-size:75px;"><strong>Article-7 | Dhakshith</strong>
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
                                        <strong><b>Hi !!! This is my 7th article</b></strong>
                                </div>
                                <img id = 'pokemon' src="https://pldh.net/media/pokemon/gen6/xy-animated-shiny/145.gif" width="300px" /><br><br>
                            </div>
                        </body>
                  </html>`
};
articleSix = {
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
                                <img id = 'pokemon' src="https://orig00.deviantart.net/cc76/f/2013/074/5/2/xerneas_animated_sprite_by_ekurepu-d5y465y.gif" width="300px" /><br><br>
                            </div>
                        </body>
                  </html>`
};
articleFive = {
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
                                <img id = 'pokemon' src="https://vignette.wikia.nocookie.net/pokemon/images/a/ae/Yveltal_Shiny_XY.gif/revision/latest?cb=20140707225121" class="img-medium"/><br><br>
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
app.get('/article-7', function (req, res) {
  res.send(createTemplate(articleSeven));
});
app.get('/article-8', function (req, res) {
  res.send(createTemplate(articleEight));
});
app.get('/MyProfile', function (req, res) {
    res.send(createTemplate(profile));
});
var counter = 0;
app.get('/Counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
