function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, strokeColor, secondaryColor, tertiaryColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(strokeColor);
    strokeWeight(2);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill(secondaryColor);
    circle(60, 60, 50);
    circle(140, 60, 50);
    circle(60, 140, 50);
    circle(140, 140, 50);
    stroke(primaryColor);
    strokeWeight(5);
    circle(25, 25, 20);
    circle(175, 25, 20);
    circle(25, 175, 20);
    circle(175, 175, 20);
    stroke(tertiaryColor);
    strokeWeight(2);
    noFill();
    circle(25, 25, 25);
    circle(175, 25, 25);
    circle(25, 175, 25);
    circle(175, 175, 25);
    noStroke();
    fill(tertiaryColor);
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    fill(strokeColor);
    noStroke();
    strokeWeight(5);
    circle(100, 100, 100);
    noFill();
    stroke(primaryColor);
    strokeWeight(2);
    circle(100, 100, 80);
}
function draw() {
    createTile(0, 0, "pink", "white", "darkblue", "lightblue");
    createTile(0, 200, "white", "lightblue", "pink", "darkblue");
    createTile(0, 200, "darkblue", "white", "pink", "lightblue");
    createTile(200, -400, "darkblue", "white", "pink", "lightblue");
    createTile(0, 200, "pink", "white", "darkblue", "lightblue");
    createTile(0, 200,"white", "lightblue", "pink", "darkblue");
    createTile(200, -400, "white", "lightblue", "pink", "darkblue");
    createTile(0, 200, "darkblue", "white", "pink", "lightblue");
    createTile(0, 200, "pink", "white", "darkblue", "lightblue");
}