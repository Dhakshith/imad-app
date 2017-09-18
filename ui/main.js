console.log('Loaded!');
var img = document.getElementById('pokemon');
img.onclick = function () {
        img.animate({height: '300px', opacity: '0.4'}, "slow");
        img.animate({width: '300px', opacity: '0.8'}, "slow");
        img.animate({height: '100px', opacity: '0.4'}, "slow");
        img.animate({width: '100px', opacity: '0.8'}, "slow");
};