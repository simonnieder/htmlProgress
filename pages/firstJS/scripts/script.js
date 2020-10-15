
  function welcome(){
      var name = window.prompt("Gib deinen Namen ein:");
      window.alert("Wilkommen auf meiner Website " + name + "!");
  }

    
  function startTime() {
    var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    document.getElementById("date").innerHTML = utc;

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  
document.getElementById("darkMode").addEventListener("click", changeColor);

var isDark = "false";
function changeColor() {
 if (isDark == "false"){
  document.getElementById("style").setAttribute('href', 'styles/style_darkmode.css');
  isDark = "true";
 }else{
  document.getElementById("style").setAttribute('href', 'styles/style.css');
  isDark = "false";
 }
}


function calculator(operator){
  document.getElementById("calculator_text").style.color = "black";
  switch(operator){
    case "C":
      var calc = document.getElementById("calculator_text").textContent;
      document.getElementById("calculator_text").innerHTML = calc.substring(0, calc.length-1);
      document.getElementById("calculator_text").style.color = "black";
    break;
    case "AC":
      document.getElementById("calculator_text").innerHTML = "";
      document.getElementById("calculator_text").style.color = "black";
    break;
    case "=":
      calculate(document.getElementById("calculator_text").textContent)
    break;
    default:
      document.getElementById("calculator_text").innerHTML = document.getElementById("calculator_text").textContent + operator;
    break;
  }

}

function calculate(calculation){
  if(/^\d{1,20}[x\-\+\/]\d{1,20}$/.test(calculation) || /^\d{1,20}$/.test(calculation)){
    document.getElementById("calculator_text").style.color = "black";
  }else{
    document.getElementById("calculator_text").style.color = "red";
    return;
  }

  var split = calculation.split(/[x\-\+\/]/);
  var num1 = parseInt(split[0]);
  var num2 = parseInt(split[1]);
  if(calculation.includes("+")){
    document.getElementById("calculator_text").innerHTML = num1 + num2;
  }else if(calculation.includes("-")){
    document.getElementById("calculator_text").innerHTML = num1 - num2;
  }else if(calculation.includes("x")){
    document.getElementById("calculator_text").innerHTML = num1 * num2;
  }
  else if(calculation.includes("/")){
    document.getElementById("calculator_text").innerHTML = num1 / num2;
  }

}

var images = ["images/lx.jpg", "images/gzuz.jpg","images/bonez.jpg","images/maxwell.jpg","images/sa4.jpg"];
var counter = 0;
function changeImage(direction){
  if(direction == "prev"){
    if(counter==0)
      counter = images.length-1;

      document.getElementById("diashow_img").src = images[counter];
      --counter;
  }else{
    if( counter == images.length)
      counter=0
    
    document.getElementById("diashow_img").src = images[counter];
    ++counter;
  }

}


var isBold = false;
var texts = document.getElementsByTagName("p");
function textFormat(){
  if(isBold){
    for(var i=0;i<texts.length;++i){
      texts[i].innerHTML =  texts[i].textContent.normalize();
    }
    isBold = false;
  }else{
    for(var i=0;i<texts.length;++i){
      texts[i].innerHTML =  texts[i].textContent.bold();
    }
    isBold = true;
  }

}

function scrollFunc(){
  var multi = parseInt(window.pageYOffset/window.innerHeight)+1;
  window.scrollTo(0, window.innerHeight*multi);
}