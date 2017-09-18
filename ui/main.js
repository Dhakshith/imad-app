console.log('Loaded!');
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveLeft () {
    marginRight = marginRight + 0.5;
    img.style.marginRight = marginRight + 'px';
}
function moveRight () {
    marginLeft = marginLeft + 0.5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 9);
};
img.onclick = function () {
    var interval = setInterval(moveLeft, 9);
};