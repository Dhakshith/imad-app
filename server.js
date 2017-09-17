var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleThree = {
    content: `<!DOCTYPE html>
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
                                document.getElementById("datetime").innerHTML = "September 17 2017";
                            </script>
        <p id="demo"></p>
        <div>
            <p style="font-size:50px;">
                <strong><b>Hi!This is my 1st article</b></strong>
        </div>
        <img id = 'pokemon' src="https://vignette.wikia.nocookie.net/pokemon/images/b/be/CharizardBack_XY.gif/revision/latest?cb=20140606125452" class="img-medium"/>
    </body>
</html>`
};

function delTemplate (data) {
    var content = data.content;
    
    var aTemplate = `
        ${content}
    `;
    return aTemplate;
}


var articleTwo = {
    content: `<!DOCTYPE html>
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
                                document.getElementById("datetime").innerHTML = "September 17 2017";
                            </script>
        <p id="demo"></p>
        <div>
            <p style="font-size:50px;">
                <strong><b>Hi!This is my 1st article</b></strong>
        </div>
        <img id = 'pokemon' src="http://25.media.tumblr.com/tumblr_maxdexHDGJ1qcm0wfo1_500.gif" class="img-medium"/>
    </body>
</html>`
};

function addTemplate (data) {
    var content = data.content;
    
    var XmlTemplate = `
        ${content}
    `;
    return XmlTemplate;
}

var articleOne = {
    content: `<!DOCTYPE html>
              <html>
                    <head>    
                        <link href="/ui/style.css" rel= "stylesheet" />
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
                                document.getElementById("datetime").innerHTML = "September 17 2017";
                            </script>
                            <hr/>
                            </p>
                            <div>
                                <p style="font-size:50px;">
                                    <strong><b>Hi !!! This is my 1st article</b></strong>
                            </div>
                            <img id = 'pokemon' src="https://res.cloudinary.com/lmn/image/upload/fl_lossy,q_80/f_auto/v1/gameskinny/d063d2b775dee12a8cc73f05d7b9b589.png" class="img-medium"/>
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
app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-1', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-2', function (req, res) {
  res.send(addTemplate(articleTwo));
});
app.get('/article-3', function (req, res) {
  res.send(aTemplate(articleThree));
});
  
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
