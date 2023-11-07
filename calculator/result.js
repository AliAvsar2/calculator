"use strict";
export function result(num1, num2, operator) {
  console.log(num1, num2, operator);
  var operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  const calculate = function (val1, val2, sign) {
    if (sign in operators) {
      return operators[sign](val1, val2);
    }
  };
  const result = calculate(+num1, +num2, operator);
  return result;
}
