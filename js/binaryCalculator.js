var display = "";

function eq() {
  if (display.indexOf("+") != -1) {
    var numbers = display.split("+");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var sum = x + y;
    var ans = sum.toString(2);
  } else if (display.indexOf("-") != -1) {
    var numbers = display.split("-");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var sub = x - y;
    var ans = sub.toString(2);
  } else if (display.indexOf("*") != -1) {
    var numbers = display.split("*");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var mul = x * y;
    var ans = mul.toString(2);
  } else if (display.indexOf("/") != -1) {
    var numbers = display.split("/");
    var x = parseInt(numbers[0], 2);
    var y = parseInt(numbers[1], 2);
    var div = x / y;
    var ans = div.toString(2);
  }
  display = ans;
  document.getElementById("res").innerHTML = display;
}

function clickButton(value){
    display += value;
    document.getElementById("res").innerHTML = display;
}
function clr() {
  display = "";
  document.getElementById("res").innerHTML = display;
};