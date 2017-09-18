console.log('Loaded!');
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 0.5;
    marginLeft = 450;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 9);
};