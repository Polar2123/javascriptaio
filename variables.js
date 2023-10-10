let firstNumber = parseInt(prompt("Pick a number"), 10); // The prompt function returns a string, use parseInt to turn the variable into an Integer
let secondNumber = parseInt(prompt("Pick a number"), 10);
let sum = firstNumber + secondNumber;
alert(sum);

const MATH_PI = 3.1415926535;

let circleRadius = parseFloat(prompt("What is the radius of the circle?"));
let circleCircumference = MATH_PI * circleRadius * 2;
let circleArea = MATH_PI * circleRadius ** 2;
alert(
  "The circumference is: " +
    circleCircumference +
    ".\nThe area is: " +
    circleArea
);
