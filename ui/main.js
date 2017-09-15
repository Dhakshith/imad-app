console.log('Loaded!');
//extra simple functions
//---
//---
//But I did not do!!!
//---
//---
//extra simple functions
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 0.5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 10);
};


//Counter code:
var button = document.getElementById('counter');
button.onclick = function () {
  
  //Create a request object:
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable:
  request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
          //Take Some Action
          if (request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      //If not done yet, no action
  };
  //Let us make the request
  request.open('GET', 'http://sdhakshithraam.imad.hasura-app.io/counter', true);
  request.send(null);
};