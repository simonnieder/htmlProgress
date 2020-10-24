var colors = [0, 30, 60, 90, 120, 150, 300, 330]
var colorIndex = 0;

function randomColor() {
  var color = Math.floor(Math.random() * colors.length);
  document.body.style.filter = "hue-rotate(" + colors[color] + "deg)";
  colorIndex = color;
}


function cycleColors() {
  var oldColor = colors[colorIndex]
  if (colorIndex == colors.length - 1)
    colorIndex = 0;
  else
    ++colorIndex;

  var updatingColor = oldColor;
  var goalColor = colors[colorIndex];
  var intervallSpeed = 10;
  if (oldColor == 330) {
    goalColor = 360;
  } else if (oldColor == 150) {
    intervallSpeed = intervallSpeed / 5;
  }
  var id = setInterval(frame, intervallSpeed);

  function frame() {
    if (updatingColor == goalColor) {
      clearInterval(id);
    } else {
      if (goalColor < oldColor) {
        updatingColor--;
      } else {
        updatingColor++;
      }
      console.log(updatingColor)
      document.body.style.filter = "hue-rotate(" + updatingColor + "deg)";
    }
  }
}