const width = window.prompt("pick a number between 10 and 100");
const height = window.prompt("pick another number");
function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (mouseIsPressed) {
    fill(115, 204, 0);
  }
  else {
    noFill();
    noStroke();
  }
  ellipse(mouseX, mouseY, width, height);
}