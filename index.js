var colors = [0, 30, 60, 90, 120, 150, 300, 330]
var colorNow = 0;

function randomColor() {
  var color = Math.floor(Math.random() * colors.length);
  document.body.style.filter = "hue-rotate(" + colors[color] + "deg)";
  colorNow = color;
}


function cycleColors() {
  if (colorNow == colors.length - 1)
    colorNow = 0;
  else
    ++colorNow;
  document.body.style.filter = "hue-rotate(" + colors[colorNow] + "deg)";
}