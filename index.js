var colors = [0, 30, 60, 90, 120, 150, 300, 330]

function randomColor() {
  document.body.style.filter = "hue-rotate(" + colors[Math.floor(Math.random() * colors.length)] + "deg)";

}