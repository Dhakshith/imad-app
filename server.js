var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
                            <p style="font-size:30px;color:red"><span id="datetime"></span></p>
                            <script>
                                var dt = new Date();
                                document.getElementById('demo').innerHTML = Date();
                            </script>
                            <hr/>
                            </p>
                            <div>
                                <p style="font-size:50px;">
                                    <strong><b>Hi!This is my 1st article</b></strong>
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

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-1', function (req, res) {
  res.send(createTemplate(articleOne));
});
  
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
