console.log('Loaded!');
//extra functions{
//---
//---
//But I did not do!!!
//---
//---
//extra functions}
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 0.5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 10);
};
var img = document.getElementById('pokemon');
function stopMoving () {
    marginLeft = marginLeft + 0;
    img.style.marginLeft = marginLeft + 'px';
}
var marginLeft = 0;
img.onclick = function () {
    stopMoving
};