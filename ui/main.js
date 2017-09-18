console.log('Loaded!');
var img = document.getElementById('pokemon');
img.onclick = function () {
    img.style.marginLeft = '450px';
};

var button = document.getElementById('counter');
button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};