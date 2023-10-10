/* 
Gamelet, a pointless game where you can move a ball
Coded by: Sivert
Stolen from: Chris Minnick
Version: 1.0
*/
const ball = document.getElementById("ball"); // Get the ball
document.addEventListener("keydown", handleKeyPress); // listen for key presses
let positionx = 0; // Sets the starting position for x
let positiony = 0; // Sets the starting positon for y
/*
handleKeyPress
responds to certain key presses by updating positions 
*/
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    // Checks if Arrow Left is pressed
    positionx = positionx - 10; // Subtracts 10 from position X
  }
  if (e.code === "ArrowRight") {
    // Checks if Arrow right is pressed
    positionx = positionx + 10; // Adds 10 to position X
  }

  if (positionx < 0) {
    // Checks if position X is less than zero
    positionx = 0; // Sets position x to zero
  }
  if (e.code === "ArrowUp") {
    // Checks if you press the arrow up button
    positiony = positiony - 10; // Subtracts 10 from position Y
  }
  if (e.code === "ArrowDown") {
    // Checks if you press the Arrow Down button
    positiony = positiony + 10; // Adds 10 to position Y
  }
  refresh(); // Updates the position changes of the ball
}

function refresh() {
  ball.style.left = positionx + "px";
  ball.style.top = positiony + "px";
}
