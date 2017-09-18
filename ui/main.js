console.log('Loaded!');
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 0.5;
    img.style.marginLeft = marginLeft + 'px';
    marginLeft = 450;
}
img.onclick = function () {
    var interval = setInterval(moveRight, 9);
};