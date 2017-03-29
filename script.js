var output = document.getElementById("output");
var input = document.getElementById("input_nums");
var numBtns = document.getElementsByClassName("numBtn");

var currentValue , arg1, arg2;
var action = "none";

var plusBtn = document.getElementById("plus");
var minusBtn = document.getElementById("minus");
var multiplyBtn = document.getElementById("multiply");
var divisionBtn = document.getElementById("division");
var delBtn = document.getElementById("delete");
var clearBtn = document.getElementById("clear");
var equalsBtn = document.getElementById("equals");


for (var i = 0 ; i < numBtns.length ; i++) {
	numBtns[i].addEventListener("click", bindClick(numBtns[i].value) );
}


function bindClick(i) {
  return function(){
    input.value = input.value.concat(i);
    currentValue = input.value;
    output.innerHTML = currentValue;
  };
}


function setValues(){
	if (!arg1){
		arg1 = currentValue;
	} else {
		arg2 = currentValue;
		if (input.value){
			doTheMath(arg1 , arg2);
		}
	}
}

function doTheMath(arg_1 , arg_2){
	switch (action){
		case "plus":
			output.innerHTML = parseFloat(arg1)+parseFloat(arg2);
			arg1 = parseFloat(arg1)+parseFloat(arg2);
			break;
		case "minus":
			output.innerHTML = parseFloat(arg1)-parseFloat(arg2);
			arg1 = parseFloat(arg1)-parseFloat(arg2);
			break;
		case "multiply":
			output.innerHTML = parseFloat(arg1)*parseFloat(arg2);
			arg1 = parseFloat(arg1)*parseFloat(arg2);
			break;
		case "division":
			output.innerHTML = parseFloat(arg1)/parseFloat(arg2);
			arg1 = parseFloat(arg1)/parseFloat(arg2);
			break;
	}
}


input.addEventListener('input' , function(){ currentValue = input.value; output.innerHTML = input.value});
plusBtn.addEventListener("click" , function(){ setValues(); action = "plus"; input.value = ""; });
minusBtn.addEventListener("click" , function(){ setValue(s); action = "minus"; input.value = "";	});
multiplyBtn.addEventListener("click" , function(){ setValues(); action = "multiply"; input.value = ""; });
divisionBtn.addEventListener("click" , function(){ setValues(); action = "division"; input.value = ""; });
equalsBtn.addEventListener("click" , function(){ setValues(); action = "equals"; input.value = ""; currentValue = "";});
delBtn.addEventListener("click" , trimCurrentValue);


function trimCurrentValue(){
	if (currentValue){
		currentValue = currentValue.substring(0, currentValue.length-1);
		input.value = currentValue;
		output.innerHTML = currentValue;
	}
}

function clear(){
	input.value = "";
	output.innerHTML = ".";
	arg1 = "";
	arg2 = "";
}

clearBtn.addEventListener("click" , clear);