function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill("pink");
    rect(0, 0, 200, 200);
    stroke("white");
    strokeWeight(2);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill("darkblue");
    circle(60, 60, 50);
    circle(140, 60, 50);
    circle(60, 140, 50);
    circle(140, 140, 50);
    stroke("pink");
    strokeWeight(5);
    circle(25, 25, 20);
    circle(175, 25, 20);
    circle(25, 175, 20);
    circle(175, 175, 20);
    stroke("lightblue");
    strokeWeight(2);
    noFill();
    circle(25, 25, 25);
    circle(175, 25, 25);
    circle(25, 175, 25);
    circle(175, 175, 25);
    noStroke();
    fill("lightblue");
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    fill("cream");
    noStroke();
    strokeWeight(5);
    circle(100, 100, 100);
    noFill();
    stroke("pink");
    strokeWeight(2);
    circle(100, 100, 80);
}

function draw() {
    createTile();
}