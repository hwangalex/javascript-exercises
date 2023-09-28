const convertToCelsius = function(F) {
  let conversion = (F-32) * 5/9;

  if (F == 32) {
    return 0;
  } else {
    return Math.round(conversion * Math.pow(10, 1)) / Math.pow(10, 1);
  }
};

const convertToFahrenheit = function(C) {
  let conversion = (C*9/5) + 32;

  if (C == 0) {
    return 32;
  } else {
    return Math.round(conversion * Math.pow(10, 1)) / Math.pow(10, 1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
