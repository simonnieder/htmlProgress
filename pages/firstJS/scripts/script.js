function welcome() {
  document.getElementById("browserName").innerHTML =
    "Browser Version: " + navigator.appCodeName;
  document.getElementById("browserLang").innerHTML =
    "Browser Language: " + navigator.language;

  if (getCookie("username") != undefined) {
    document.getElementById("name").value = getCookie("username");
    greet();
  }

  if (getCookie("darkMode") != undefined && getCookie("darkMode") == "on") {
    changeColor();
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function startTime() {
  var utc = new Date().toJSON().slice(0, 10).replace(/-/g, ".");
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
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

document.getElementById("darkMode").addEventListener("click", changeColor);

var isDark = false;

function changeColor() {
  if (isDark == false) {
    document
      .getElementById("style")
      .setAttribute("href", "./styles/style_darkmode.css");
    isDark = true;
    document.cookie = "darkMode=on";
  } else {
    document.getElementById("style").setAttribute("href", "./styles/style.css");
    isDark = false;
    document.cookie = "darkMode=off";
  }
}

function calculator(operator) {
  document.getElementById("calculator_text").style.color = "black";
  switch (operator) {
    case "C":
      var calc = document.getElementById("calculator_text").textContent;
      document.getElementById("calculator_text").innerHTML = calc.substring(
        0,
        calc.length - 1
      );
      document.getElementById("calculator_text").style.color = "black";
      break;
    case "AC":
      document.getElementById("calculator_text").innerHTML = "";
      document.getElementById("calculator_text").style.color = "black";
      break;
    case "=":
      calculate(document.getElementById("calculator_text").textContent);
      break;
    default:
      document.getElementById("calculator_text").innerHTML =
        document.getElementById("calculator_text").textContent + operator;
      break;
  }
}

function calculate(calculation) {
  /*if (/^\d{1,20}[x\-\+\/]{1}\d{1,20}$/.test(calculation) || /^\d{1,20}$/.test(calculation)) {
    document.getElementById("calculator_text").style.color = "black";
  } else {
    document.getElementById("calculator_text").style.color = "red";
    return;
  }
*/
  document.getElementById("calculator_text").style.color = "black";
  try {
    var result = eval(calculation);
    document.getElementById("calculator_text").innerHTML = result;
  } catch (err) {
    document.getElementById("calculator_text").style.color = "red";
  }

}

var images = [
  "./images/lx.jpg",
  "./images/gzuz.jpg",
  "./images/bonez.jpg",
  "./images/maxwell.jpg",
  "./images/sa4.jpg",
];
var counter = 0;

function changeImage(direction) {
  if (direction == "prev") {
    if (counter == 0) counter = images.length - 1;

    document.getElementById("diashow_img").src = images[counter];
    --counter;
  } else {
    if (counter == images.length) counter = 0;

    document.getElementById("diashow_img").src = images[counter];
    ++counter;
  }
}

var isBold = false;
var texts = document.getElementsByTagName("p");

function textFormat() {
  if (isBold) {
    for (var i = 0; i < texts.length; ++i) {
      texts[i].style.fontWeight = "400";
    }
    isBold = false;
  } else {
    for (var i = 0; i < texts.length; ++i) {
      texts[i].style.fontWeight = "700";
    }
    isBold = true;
  }
}

function scrollFunc() {
  var multi = parseInt(window.pageYOffset / window.innerHeight) + 1;
  window.scrollTo(0, window.innerHeight * multi);
}

function greet() {
  var name = document.getElementById("name").value;
  document.getElementById("greeting").innerHTML =
    "Welcome to my Website " + name + "!";
  document.getElementsByTagName("form")[0].style.display = "none";
  document.getElementById("greeting").style.display = "";
  document.cookie = "username=" + name;
}

document.getElementById("changeName").addEventListener("click", changeName);
var isOpen = true;

function changeName() {
  if (isOpen) {
    document.getElementsByTagName("form")[0].style.display = "";
    isOpen = false;
  } else {
    document.getElementsByTagName("form")[0].style.display = "none";
    isOpen = true;
  }
}

function survey1() {
  var radios = document.getElementsByClassName("radio1");
  if (radios[radios.length - 1].checked) {
    document.getElementById("radioOut").innerHTML = "Bisch a feini!";
  } else {
    document.getElementById("radioOut").innerHTML = "Koan feini!";
  }
}

function survey2() {
  var check = document.getElementsByClassName("check1");
  var string = "You are a ";
  for (var i = 0; i < check.length; ++i) {
    if (check[i].checked) {
      string = string + " " + check[i].name;
      if (i < check.length - 1) {
        string = string + ","
      }
    }
  }
  string = string + " guy!";
  document.getElementById("checkOut").innerHTML = string;
}