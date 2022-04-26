function setup() {
    createCanvas(800,800);
    strokeWeight(2);
  }
  
  function draw() {
    background(249,152,175);
    stroke(255);
    
    for (let i = 1; i <= 30; i++) {
      strokeWeight(i * 0.2);
  
      let lineX = i * 15;
      line(lineX, 0, lineX, height);
    }
  }
    function mousePressed() {
      noLoop();
    }
