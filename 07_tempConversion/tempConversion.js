const convertToCelsius = function (temp) {
  let cTemp = (temp - 32) * (5 / 9);
  return +convertToFixed(cTemp);
};

const convertToFahrenheit = function (temp) {
  let fTemp = temp * (9 / 5) + 32;
  return +convertToFixed(fTemp);
};

function convertToFixed(temp) {
  console.log(String(temp)[String(temp).indexOf('.') + 1]);
  if (String(temp)[String(temp).indexOf('.') + 1] === '0') {
    return temp.toFixed(0);
  } else {
    return temp.toFixed(1);
  }
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
