console.log('Loaded!');
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 0.99999999;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 9);
};
