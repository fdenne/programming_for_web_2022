let angleRotate = 0.0;
let afraidimg;
let guiltyimg;
let anxiousimg;
let ashamedimg;
let boredimg;
let confidentimg;
let disappointedimg;
let disgustedimg;
let drainedimg;
let enragedimg;
let frustratedimg;
let helplessimg;
let hopefulimg;
let hurtimg;
let joyfulimg;
let lonelyimg;
let lovedimg;
let overwhelmedimg;
let remorsefulimg;
let sketpicalimg;
let surprisedimg;

function preload() {
    afraidimg = loadImage('img/afraid.png');
    guiltyimg = loadImage('img/guilty.png');
    anxiousimg = loadImage('img/anxious.png');
    ashamedimg = loadImage('img/ashamed.png');
    boredimg = loadImage('img/bored.png');
    confidentimg = loadImage('img/confident.png');
    disappointedimg = loadImage('img/disappointed.png');
    disgustedimg = loadImage('img/disgusted.png');
    drainedimg = loadImage('img/drained.png');
    enragedimg = loadImage('img/enraged.png');
    frustratedimg = loadImage('img/frustrated.png');
    helplessimg = loadImage('img/helpless.png');
    hopefulimg = loadImage('img/hopeful.png');
    hurtimg = loadImage('img/hurt.png');
    joyfulimg = loadImage('img/joyful.png');
    lonelyimg = loadImage('img/lonely.png');
    lovedimg = loadImage('img/loved.png');
    overwhelmedimg = loadImage('img/overwhelmed.png');
    remorsefulimg = loadImage('img/remorseful.png');
    sketpicalimg = loadImage('img/sketpical.png');
    surprisedimg = loadImage('img/surprised.png');
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
    textSize(18);
    text("I feel...", 470, 505);
    pop();
    // "sad"
    push();
    fill(255);
    noStroke();
    textSize(14);
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
    push();
    textSize(30);
    text("*", 485, 325);
    text("*", 400, 300);
    text("*", 550, 285);
    text("*", 555, 390);
    text("*", 355, 590);
    text("*", 335, 690);
    text("*", 435, 690);
    text("*", 535, 650);
    text("*", 700, 500);
    text("*", 670, 670);
    text("*", 400, 600);
    text("*", 450, 400);
    text("*", 380, 400);
    text("*", 300, 510);
    text("*", 250, 610);
    text("*", 670, 590);
    pop();
    // hover effect
    push();
    textSize(14);
    if(mouseX < 505 && mouseX > 460 && mouseY < 350 && mouseY > 300) { 
        text('guilty', 485, 325);
         ellipse(500, 100, 150, 150);
         image(guiltyimg, 390, 0, 250, 250);
        }
    push();
        if(mouseX < 425 && mouseX > 375 && mouseY < 325 && mouseY > 275) {
         text('ashamed', 400, 300);
         ellipse(400, 100, 150, 150);
         image(ashamedimg, 280, -10, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 575 && mouseX > 525 && mouseY < 310 && mouseY > 260) {
         text('lonely', 550, 285);
         ellipse(550, 100, 150, 150);
         image(lonelyimg, 440, 0, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 580 && mouseX > 530 && mouseY < 415 && mouseY > 375) {
         text('bored', 555, 390);
         ellipse(600, 100, 150, 150);
         image(boredimg, 490, 0, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 380 && mouseX > 330 && mouseY < 615 && mouseY > 575) {
         text('afraid', 355, 590);
         ellipse(150, 700, 150, 150);
         image(afraidimg, 20, 600, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 360 && mouseX > 310 && mouseY < 715 && mouseY > 675) {
         text('helpless', 335, 690);
         ellipse(150, 700, 150, 150);
         image(helplessimg, 20, 600, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 460 && mouseX > 410 && mouseY < 715 && mouseY > 675) {
         text('surprised', 435, 690);
         ellipse(250, 800, 150, 150);
         image(surprisedimg, 110, 700, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 560 && mouseX > 510 && mouseY < 675 && mouseY > 625) {
         text('excited', 535, 650);
         ellipse(450, 900, 150, 150);
         image(joyfulimg, 310, 800, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 725 && mouseX > 675 && mouseY < 525 && mouseY > 475) {
         text('loved', 700, 500);
         ellipse(900, 500, 150, 150);
         image(lovedimg, 760, 415, 280, 280);
        }
    pop();
    push();
    
        if(mouseX < 695 && mouseX > 645 && mouseY < 695 && mouseY > 645) {
         text('confident', 670, 670);
         ellipse(850, 720, 150, 150);
         image(confidentimg, 720, 615, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 425 && mouseX > 375 && mouseY < 625 && mouseY > 575) {
         text('anxious', 400, 600);
         ellipse(190, 750, 150, 150);
         image(anxiousimg, 65, 630, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 475 && mouseX > 425 && mouseY < 425 && mouseY > 375) {
         text('disappointed', 450, 400);
         ellipse(350, 130, 150, 150);
         image(disappointedimg, 230, 20, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 405 && mouseX > 355 && mouseY < 425 && mouseY > 375) {
         text('frustrated', 380, 400);
         ellipse(300, 130, 150, 150);
         image(frustratedimg, 180, 20, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 325 && mouseX > 275 && mouseY < 535 && mouseY > 485) {
         text('enraged', 300, 510);
         ellipse(100, 500, 150, 150);
         image(enragedimg, -20, 380, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 275 && mouseX > 225 && mouseY < 635 && mouseY > 585) {
         text('overwhelmed', 250, 610);
         ellipse(100, 600, 150, 150);
         image(overwhelmedimg, -20, 500, 250, 250);
        }
    pop();
    push();
    
        if(mouseX < 695 && mouseX > 645 && mouseY < 615 && mouseY > 565) {
         text('hopeful', 670, 590);
         ellipse(900, 600, 150, 150);
         image(hopefulimg, 770, 500, 250, 250);
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
 