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
		<title>ProgressBars+Spinners</title>
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
    	    <div class="radial-progress" data-progress="0">
        	<div class="circle">
        		<div class="mask full">
        			<div class="fill"></div>
        		</div>
        		<div class="mask half">
        			<div class="fill"></div>
        			<div class="fill fix"></div>
        		</div>
        		<div class="shadow"></div>
        	</div>
        	<div class="inset">
        		<div class="percentage">
        			<div class="numbers"><span>-</span><span>0%</span><span>1%</span><span>2%</span><span>3%</span><span>4%</span><span>5%</span><span>6%</span><span>7%</span><span>8%</span><span>9%</span><span>10%</span><span>11%</span><span>12%</span><span>13%</span><span>14%</span><span>15%</span><span>16%</span><span>17%</span><span>18%</span><span>19%</span><span>20%</span><span>21%</span><span>22%</span><span>23%</span><span>24%</span><span>25%</span><span>26%</span><span>27%</span><span>28%</span><span>29%</span><span>30%</span><span>31%</span><span>32%</span><span>33%</span><span>34%</span><span>35%</span><span>36%</span><span>37%</span><span>38%</span><span>39%</span><span>40%</span><span>41%</span><span>42%</span><span>43%</span><span>44%</span><span>45%</span><span>46%</span><span>47%</span><span>48%</span><span>49%</span><span>50%</span><span>51%</span><span>52%</span><span>53%</span><span>54%</span><span>55%</span><span>56%</span><span>57%</span><span>58%</span><span>59%</span><span>60%</span><span>61%</span><span>62%</span><span>63%</span><span>64%</span><span>65%</span><span>66%</span><span>67%</span><span>68%</span><span>69%</span><span>70%</span><span>71%</span><span>72%</span><span>73%</span><span>74%</span><span>75%</span><span>76%</span><span>77%</span><span>78%</span><span>79%</span><span>80%</span><span>81%</span><span>82%</span><span>83%</span><span>84%</span><span>85%</span><span>86%</span><span>87%</span><span>88%</span><span>89%</span><span>90%</span><span>91%</span><span>92%</span><span>93%</span><span>94%</span><span>95%</span><span>96%</span><span>97%</span><span>98%</span><span>99%</span><span>100%</span>
        			</div>
		</div>
	</div>
</div>
    	</div>
	</body>
</html>
    `  
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
  res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
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
