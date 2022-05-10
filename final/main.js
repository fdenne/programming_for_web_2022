let angleRotate = 0.0;
let afraidimg;
let guiltyimg;
let anxiousimg;
let ashamedimg;
let boredimg;
let confidentimg;

function preload() {
    afraidimg = loadImage('img/afraid.png');
    guiltyimg = loadImage('img/guilty.png');
}
function setup() {
    createCanvas(1000, 1000);
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();
  }
  
  function draw() {
    background(255);
  // color wheel gradient
    conicGradient(
      0, width/2, height/2,
      [
        color(190, 100, 100, 100),
        color(100, 100, 100, 100),
        color(10, 100, 100, 100),
        color(280, 100, 100, 100)
      ]
    );
    ellipse(width/2, height/2, 600, 600);
    // white center circle
    push();
    fill(255);
    ellipse(500, 500, 70, 70);
    // "im feeling"
    push();
    fill(0);
    noStroke();
    text("I'm feeling...", 470, 505);
    pop();
    // "sad"
    push();
    fill(255);
    noStroke();
    text("sad", 490, 440);
    pop();
    // "peaceful"
    push();
    let angle1 = radians(45);
    translate(90, 175);
    rotate(angle1);
    fill(255);
    noStroke();
    text("peaceful", 520, -125);
    pop();
    // "joyful"
    push();
    fill(255);
    noStroke();
    text("joyful", 490, 575);
    pop();
    // "mad"
    push();
    let angle2 = radians(-45);
    translate(100, 180);
    rotate(angle2);
    fill(255);
    noStroke();
    text("mad", 30, 450);
    pop();
    // "powerful"
    push();
    translate(100, 180);
    rotate(angle2);
    fill(255);
    noStroke();
    text("powerful", 45, 585);
    pop();
    //"scared"
    translate(100, 180);
    rotate(angle1);
    fill(255);
    noStroke();
    text("scared", 490, 15);
    pop();
    // hover effect
    push();
    if(mouseX < 505 && mouseX > 460 && mouseY < 350 && mouseY > 300) {
         text('guilty', 485, 325);
         ellipse(820, 250, 150, 150);
         image(guiltyimg, 700, 150, 250, 250);
        }
    push();
        if(mouseX < 500 && mouseX > 400 && mouseY < 420 && mouseY > 380) {
         text('ashamed', 450, 400);
        }
    pop();
    push();
    
        if(mouseX < 550 && mouseX > 450 && mouseY < 450 && mouseY > 350) {
         text('lonely', 515, 385);
        }
    pop();
    push();
    
        if(mouseX < 600 && mouseX > 500 && mouseY < 400 && mouseY > 300) {
         text('bored', 555, 390);
        }
    pop();
    
  }
  
  function conicGradient (sA, sX, sY, colors) {
    const gradient = drawingContext.createConicGradient(
      sA, sX, sY
    );
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(0.25, colors[1]);
    gradient.addColorStop(0.5, colors[2]);
    gradient.addColorStop(0.75, colors[3]);
    gradient.addColorStop(1, colors[0]);
  
    drawingContext.fillStyle = gradient;
  }
 