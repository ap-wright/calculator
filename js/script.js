var add = function(number1, number2){
	return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);

alert(result);

var subtract = function(number1,number2){
  return number1 - number2;
}

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);

alert(result);

var multiply = function(number1,number2){
  return number1 * number2;
}

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);

alert(result);

var divide = function(number1,number2){
  return number1 / number2;
}

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);

alert(result);

//Celcius to Farhenheit //

var celcius = parseInt(prompt("Enter the temperature in Celcius."));
var result = (celcius * 1.8) + 32;

alert("Your answer is: " + result);

var farhenheit = parseInt(prompt("Enter the temperature in Farhenheit."));
var result = (farhenheit - 32) * 5/9;

alert("Your answer is " + result);


//This doesn't work //
var bmi = function (height,weight) {
	return height * height / weight;
}

var height = parseInt(prompt("Enter your height in m:"));
var weight = parseInt(prompt("Enter your weight in kg:"));
var result = muliply(height, height) + divide (weight);

alert(result);
//end of code that doesn't work. Couldn't figure out how to multipy and divide at same time //
