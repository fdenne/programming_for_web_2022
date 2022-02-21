let bubble;
let shapes = [];
let startingX = 100;
let startingY = 100;

function setup() {
    createCanvas(500, 500);
    bubble = new Bubble();
    for (let i = 0; i < 10; i++) {
         shapes.push(new Bubble(startingX, startingY));
         startingX += 150;
     }
}

function draw() {
    background(0);
    for(let shapeIndex = 0; shapeIndex < shapes.length; shapeIndex++) {
        shapes[shapeIndex].move();
        shapes[shapeIndex].show();
    }
     
}

class Bubble {
    constructor(x,y) {
        this.x = 250;
        this.y = 250;
    }
    move() {
        this.x = this.x + random(-10, 10);
        this.y = this.y + random(-10, 10);
    }
    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}