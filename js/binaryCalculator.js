var display = "";
var hasEq = 0;
var operatorBuffer = "";
var isContainOperator = false;

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
  hasEq = 1;
}

function clickButton(value){
    if (hasEq == 1)
    {
      clr();
    }
    hasEq = 0; // auto clear from display
    display += value;
    document.getElementById("res").innerHTML = display;
    operatorBuffer = null;
}
function clickOperator(value){
  if( operatorBuffer !== null)
  {
    display.replace(/.$/,".") = '';  //update to new operator
  }
  if(isContainOperator){
    ans = display;
    eq();
    hasEq = 0;
  }
  else{
    isContainOperator = true;
  }
  
  display += value;
  document.getElementById("res").innerHTML = display;
  operatorBuffer = value;
  

}
function clr() {
  display = "";
  document.getElementById("res").innerHTML = display;
  isContainOperator = false;
};