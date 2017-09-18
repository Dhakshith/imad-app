console.log('Loaded!');
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 0.5;
    img.style.marginLeft = marginLeft + 'px';
}
function Hey() {
    var interval = setInterval(moveRight, 9);
}
function Ho()
{
        $("#pokemon").stop();
}
