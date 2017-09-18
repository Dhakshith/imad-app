console.log('Loaded!');
var img = document.getElementById('pokemon');
img.onclick = function () {
    img.style.marginLeft = '450px';
};

var button = document.getElementById('counter');
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'sdhakshithraam.imad.hasura-app.io/counter', true);
    request.send(null);
};