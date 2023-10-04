const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;
  for (let num in nums) {
    sum += nums[num];
  }
  return sum;
};

const multiply = function(nums) {
  let outcome = 1;
  for (let num in nums) {
    outcome *= nums[num]
  }
  return outcome;
};

const power = function(num, exponent) {
  let current = num;
  for (let i = 0; i < exponent - 1; i++) {
    current *= num;
  }
  return current;
};

const factorial = function(num) {
  let current = 1;

  if (num == 0) {
    return 1;
  } else {
    for (let i = num; i > 0; i--) {
      current *= num;
      num -= 1;
    }
  }

  return current;
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
