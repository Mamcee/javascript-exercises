const add = function(num1, num2) {
return num1 + num2;	
};

const subtract = function(num1, num2) {
return num1 - num2;	
};

const sum = function(numbers) {
	let sum = 0;
	for(let i =0; i< numbers.length; i ++){
		sum += numbers[i];
	}
	return sum;
};


const multiply = function(num1, num2) {
return num1 * num2;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
	if (number < 0){
		return "factorial is not defined for negative numbers";}
	if (number === 0){
		return 1;
	}
	return number * factorial (number -1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
