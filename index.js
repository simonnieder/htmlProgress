function randomColor() {
  document.body.style.filter = "hue-rotate(" + Math.floor(Math.random() * 360) + "deg)";
}