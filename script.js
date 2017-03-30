var output = document.getElementById("output");
var input = document.getElementById("input_nums");
var numBtns = document.getElementsByClassName("numBtn");
var currentValue , arg1, arg2;
var currentAction = "none";

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

function trimCurrentValue(){
	if (currentValue){
		currentValue = currentValue.substring(0, currentValue.length-1);
		input.value = currentValue;
		output.innerHTML = currentValue;
	}
}


function setValue(action){
	return function(){
		if (!arg1){
			arg1 = currentValue;
		} else {
			arg2 = currentValue;
			if (input.value){
				doTheMath(arg1 , arg2);
			}
		}
		if(action != "equals"){
			currentAction = action;
		}
		input_nums.value = "";
	}
}

function doTheMath(arg_1 , arg_2){
	switch (currentAction){
		case "plus":
			output.innerHTML = parseFloat(arg_1)+parseFloat(arg_2);
			arg1 = parseFloat(arg_1)+parseFloat(arg_2);
			break;
		case "minus":
			output.innerHTML = parseFloat(arg_1)-parseFloat(arg_2);
			arg1 = parseFloat(arg_1)-parseFloat(arg_2);
			break;
		case "multiply":
			output.innerHTML = parseFloat(arg_1)*parseFloat(arg_2);
			arg1 = parseFloat(arg_1)*parseFloat(arg_2);
			break;
		case "division":
			output.innerHTML = parseFloat(arg_1)/parseFloat(arg_2);
			arg1 = parseFloat(arg_1)/parseFloat(arg_2);
			break;
		case "equals":
			input.value = "";
			currentValue = "";
			break;
	}
}

$("#input_nums").keyup(function(){
	currentValue = input.value;
	output.innerHTML = input.value;
});

$("#plus").click(setValue("plus"));

$("#minus").click(setValue("minus"));

$("#multiply").click(setValue("multiply"));

$("#division").click(setValue("division"));

$("#equals").click(setValue("equals"));

$("#clear").click(function(){
  input.value = "";
	arg1 = "";
	arg2 = "";
	currentValue = "";
  output.innerHTML = ".";
});

$("#delete").click(trimCurrentValue);
