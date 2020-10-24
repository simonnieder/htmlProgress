var colors = [0, 30, 60, 90, 120, 300, 330]
var colorIndex = 0;

function randomColor() {
  console.log(getCookie("bg-color"))
  if (getCookie("bg-color") != undefined) {
    document.body.style.filter = "hue-rotate(" + colors[getCookie("bg-color")] + "deg)";
    colorIndex = getCookie("bg-color");
  } else {
    var color = Math.floor(Math.random() * colors.length);
    document.body.style.filter = "hue-rotate(" + colors[color] + "deg)";
    colorIndex = color;
    setCookie("bg-color", colorIndex);
  }
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
      document.body.style.filter = "hue-rotate(" + updatingColor + "deg)";
    }
  }
  setCookie("bg-color", colorIndex);
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift().split(";")[0];
}

function setCookie(cookiename, value) {
  document.cookie = cookiename + "=" + value + ";domain=;path=/";
  console.log(value);
}