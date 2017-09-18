console.log('Loaded!');
var img = document.getElementById('pokemon');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 0.5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 9);
};
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#box").animate({height: "+300px"});
    });
    $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
    });
    $("#btn3").click(function(){
        $("#box").animate({width: "+300"});
    });
    $("#btn4").click(function(){
        $("#box").animate({width: "100px"});
    });
});
