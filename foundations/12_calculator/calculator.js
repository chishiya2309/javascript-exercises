const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let n = array.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += array[i];
  }
  return res;
};

const multiply = function(array) {
  let n = array.length;
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= array[i];
  }
  return res;

};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(a) {
	let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return result;
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
