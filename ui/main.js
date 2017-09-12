console.log('Loaded!');
//extra simple functions{
//---
//---
//But I did not do!!!
//---
//---
//extra simple functions}
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 0.5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 10);
};


var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
  
  //Make a request to the counter endpoint
  
  //Capture the response and store it in a variable
  
  //Render the variable in the correct span
  
  //Code:
  
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};