let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("pokemon.jpeg")

}
function draw() {
    background(grid);
    // feet
    fill(252, 214, 223);
    stroke(0);
    strokeWeight(1);
    // left
    ellipse(350, 600, 100, 75);
    // right
    ellipse(650, 600, 100, 75);
    // body
    stroke(0);
    ellipse(500, 450, 400);
    //eyes 1
    stroke(0);
    strokeWeight(1);
    fill("white");
    ellipse(400, 500, 100, 120);
    ellipse(600, 500, 100, 120);
    // eyes 2
    stroke(8, 114, 143);
    strokeWeight(70);
    point(400, 500);
    point(600, 500);
    stroke(0)
    strokeWeight(50);
    point(400, 500);
    point(600, 500);
    stroke("white");
    strokeWeight(25);
    point(410,490);
    point(610, 490);
    // mouth
    noFill();
    strokeWeight(3);
    stroke(0);
    arc(500, 550, 50, 40, 0, PI);
    // hands
    fill(252, 214, 223);
    strokeWeight(0);
    ellipse(320, 530, 50, 80);
    ellipse(680, 530, 50, 80);
    strokeWeight(1);
    arc(320, 540, 50, 80, 0, PI);
    arc(680, 540, 50, 80, 0, PI);
    // ears
    triangle(308, 400, 300, 300, 400, 308);
    triangle(692, 400, 700, 300, 600, 308);
    fill(67,73,89);
    triangle(315, 395, 315, 315, 400, 315);
    triangle(680, 395, 685, 315, 600, 315);
}