/* Trying out prompts and alerts, also using parseInt for data types :)
let firstNumber = parseInt(prompt("Pick a number"), 10); // The prompt function returns a string, use parseInt to turn the variable into an Integer
let secondNumber = parseInt(prompt("Pick a number"), 10);
let sum = firstNumber + secondNumber;
alert(sum);
*/

/* Exploring const and special backslash commands :)
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
*/

/*  Exploring the dollar-sign before curly brackets to implement variables in a string :)
let orderTotal = 39.99;
let itemPurchased = "Soda";
let storeCustomer = `Joel`;

let thankForOrder = `${storeCustomer}, thank you for your order of ${itemPurchased}. The total comes out to $${orderTotal}. Thank you for coming and please come again :)`;
console.log(thankForOrder);
*/

/* trying out charAt and .length :)
let randomLetters = "RuhcuihfeuufhiFJAJFjfiaj";
let letterNumber = randomLetters.charAt(randomLetters.length - 1);
console.log(letterNumber);
*/

/* Trying out the .concat function :)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);
*/

/* Trying out the .indexOf function, the function is case sensitive :)
let favoriteTree = "Pine Tree";
let whereIsE = favoriteTree.indexOf("e");
console.log(whereIsE);
*/

/* Testing out the .split function, also logging from the array :)
let listOfDates = "26th,23rd,28th,29th";
let dateArray = listOfDates.split(",");
console.log(dateArray);
console.log(dateArray[2]);
*/

/* Testing out the .substring function :)
let exactAddress = "Sugar street 5729";
let addressLength = exactAddress.length;
let numberOfAddress = exactAddress.substring(addressLength - 4, addressLength);
console.log(numberOfAddress);
*/
