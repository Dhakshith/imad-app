var submit = document.getElementById('submit_btn');
                submit.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            
            if (request.status === 200) {            var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (i=0; i< names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                    }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    
    var nameInput = document.getElementById('name');
                var name = nameInput.value;

    request.open('GET', 'http://sdhakshithraam.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};


var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML= counter.toString();
};