var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var config = {
    user: 'sdhakshithraam',
    database: 'sdhakshithraam',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));
progress = {
    content: `
    <!DOCTYPE html>
<html lang="en">
	<head>	
		<meta charset="UTF-8">
		<title>ProgressBar+Spinners</title>
		<link href="/style.css" rel="stylesheet"><title>My Profile</title><link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
		<link href="/style.css" rel="stylesheet" />
	</head>
	<body>
	    <div class="container">
    		<h1 style="font-size:50px;color:#FFA300">Fidget Spinner</h1><br>
    		<img src="https://cdn2.iconfinder.com/data/icons/fidget-spinners/500/Round-outline-moving-512.png" class="fidget">
    		<h1 style="font-size:50px;color:#FFA300">Normal Spinner</h1><br>
    		<div class="loader"></div>
    		<h1 style="font-size:50px;color:#FFA300">Rectangular Progress Bar</h1>
    		<div id="myProgress">
                <div id="myBar"></div>
            </div><br><br>
            <button class="button" onclick="move()">Start Process</button>
    		<br><br><hr>
    	    <script type="text/javascript" src="/main.js"></script>
    	</div>
	</body>
</html>
    `  
};
loginoutcom = {
    content: `<!DOCTYPE html>
<html>
    <head>
        <title>
            Login | Logout | Comment
        </title>
        <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" height="8px" />
        <link href="/style.css" rel="stylesheet">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body>
        <div class="container">
            <h1 style="border: 2px solid #a1a1a1;padding: 50px 100px; background: #29FFC2;width: 500px;border-radius: 50px;text-shadow: -10px 10px 0px #00e6e6,-20px 20px 0px #01cccc,-30px 30px 0px #00bdbd;font-size: 150px;color:white">
                Login   Logout
            </h1>
            <hr>
            <div>
                <p style="font-size:37px;"><a href="/">Home</a>
            </div>
            <hr>
            <form name="login">
                <input style="background-color: white;border: inset;color:#800080;padding: 20px 50px;text-align: center;display: inline-block;font-size: 40px;" type="text" name="userid" placeholder="Username"/><br><br>
                <input style="background-color: white;border: inset;color:#800080;padding: 20px 50px;text-align: center;display: inline-block;font-size: 40px;" type="password" name="pswrd" placeholder="Password"/><hr>
                <input style="background-color: brown;border: inset;color:white;padding: 30px 70px;text-align: center;display: inline-block;font-size: 20px;" type="button" onclick="check(form)" value="Login"/><br><br>
                <input style="background-color: brown;border: inset;color:white;padding: 30px 70px;text-align: center;display: inline-block;font-size: 20px;" type="button" onclick="alert('Logged Out')" value="Logout"/><hr>
            </form>
            <hr>
            <script language="javascript">
                function check(form) {
                    if(form.userid.value == form.pswrd.value) {
                        alert('Logged In As ' + form.userid.value + ' !')
                    } else { 
                        if(form.userid.value != form.pswrd.value) {
                            alert('OOPS! Username Or Password Seems To Be Invalid!')
                        }
                    }
                }
            </script>
            <h1 style="border: 2px solid #a1a1a1;padding: 50px 100px;background: #29FFC2;width: 500px;border-radius: 50px;text-shadow: -10px 10px 0px #00e6e6,-20px 20px 0px #01cccc,-30px 30px 0px #00bdbd;font-size: 150px;color:white">
                Comment
            </h1>
            <form method="post">
                <label>Name: <br>
                <input type="text"><br>
                </label>
                <label>Phone No.: <br>
                <input type="number" value="xxxx-xxxxxx"><br>
                </label>
                <label>Email Address: <br>
                <input type="text" value="xxxx-xxxxxx"><br>
                </label>
            </form>
            <br><br>
        </div>
    </body>
</html>`
};
profile = {
    content: `
    <!DOCTYPE html>
    <html>
    <head>
    <link href="/style.css" rel="stylesheet"><title>My Profile</title><link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
    <title>My Profile</title>
    </head>
    <body>
        <div class="container">
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
                    I study at Vidhya Niketan Public School!
                </h1>
            </div>
            <hr/>
            <h2 style="color:green">
                A SIMPLE CLICKED TIMES COUNTER:
            </h2>
            <div class = "Footer">
                <h1>
                    Number Of Times This Button <button class="button" id="counter">Click Me !</button> Has Been Clicked</h1><p style="font-size:20px;"> + </p><h1>Number Of Visits To This Page <div class="button"><form action="http://sdhakshithraam.imad.hasura-app.io/counter">
        <input type="submit" value="Counter" />
    </form></div><br><span id="count" style="font-family:arial;font-size:50px;color:black">0</span>
                </h1>    
            </div>
            <hr/>
            <input style="color:#800080;font-size:30px" type="text" id="name" placeholder="Type Your Name"><br><br><br>
            <input type="submit" id="submit_btn" class="button" value="Submit"><br>
            <script type="text/javascript" src="/main.js">
            </script>
            <script>
                var button = document.getElementById('counter');
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML= counter.toString();
            }
        }
    };
    request.open('GET', 'http://sdhakshithraam.imad.hasura-app.io/counter', true);
    request.send(null);
};
            </script>
            <div style="color: #FF0A0E;font-size: 30px">
                <ul style="list-style-image: url('sqpurple.gif');" class="a" id="namelist"></ul>
            </div>
            <hr>
        </div>
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
                            <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
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
                                    document.getElementById("datetime").innerHTML = "September 21 2017";
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
                            <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
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
                                    document.getElementById("datetime").innerHTML = "September 21 2017";
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
                            <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
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
                                    document.getElementById("datetime").innerHTML = "September 21 2017";
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
                            <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
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
                                    document.getElementById("datetime").innerHTML = "September 21 2017";
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
                            <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
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
                                    document.getElementById("datetime").innerHTML = "September 21 2017";
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
                            <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
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
                                                    document.getElementById("datetime").innerHTML = "September 21 2017";
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
            <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
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
                                    document.getElementById("datetime").innerHTML = "September 21 2017";
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
                            <link rel="icon" type="image/gif" href="https://i.pinimg.com/736x/bf/91/8f/bf918fed99e248e964fa1a2bdc2d8e05--logo-branding-branding-design.jpg" />
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
                                    document.getElementById("datetime").innerHTML = "September 21 2017";
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
function hash(input, salt) {
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return hashed.toString('hex');
}
app.get('/hash/:input', function (req, res) {
  var hashedString = hash(req.params.input, 'this-is-some-random-string');
  res.send(hashedString);
});

app.get('/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var Pool = new Pool(config);
app.get('/Database', function (req, res) {
  //make a select request
  //return a response with the results
  Pool.query('SELECT * FROM "TestApp"', function (err, result){
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
  });
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
app.get('/Login|Logout', function (req, res) {
  res.send(createTemplate(loginoutcom));
});
app.get('/article-9', function (req, res) {
    Pool.query(`SELECT name FROM "Articles" where title = 'Article-5'`, function (err, result){
      if (err) {
          res.status(500).send(JSON.stringify(result.rows));
      } else {
          res.send(JSON.stringify(result));
      }
  });
});
app.get('/MyProfile', function (req, res) {
    res.send(createTemplate(profile));
});
app.get('/Progress', function (req, res) {
    res.send(createTemplate(progress));
});
var counter = 0;
app.get('/Counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
var names = [];
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    names.push(name);
    //JSON: Java Script Object Notation
    res.send(JSON.stringify(names));
});
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
