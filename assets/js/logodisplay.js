const center = document.getElementById("center");
center_width = center.offsetWidth;
//console.log(center_width)
center.style.marginLeft = Math.round(600-center_width/2) + "px";
center.style.marginTop = 300 + "px";

var div = 180 / 11;
var radius = 400;
var totalOffset_X = 600-40;
var totalOffset_Y = 450;
for (var i = 0; i <= 11; ++i) {
    var name = "js-"+i.toString();
    const child = document.getElementById(name);
    child.style.position = 'absolute';
    var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
    var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
    child.style.top = (totalOffset_Y - y).toString() + "px";
    child.style.left = (totalOffset_X + x).toString() + "px";
}

