const convertToCelsius = function(fah) {
  let res = (fah - 32) / 1.8;
  return Number.isInteger(res) ? res : Number(res.toFixed(1));
};

const convertToFahrenheit = function(cel) {
  let res = (cel * 1.8) + 32;
  return Number.isInteger(res) ? res : Number(res.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
