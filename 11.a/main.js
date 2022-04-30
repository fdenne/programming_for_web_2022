function setup() {
    createCanvas(1050, 1500);
    background(0);
    let myShine = new shine();
};

let shineArray = [];


class Shine {
  constructor () {
      this.x = 200;
      this.y = 200;
      this.s = random(0.25, 1);
      this.show();
  }
  show () {
      shine (this.x, this.y, this.s);
      for (let j = 0; j < 10; j++) {
        for (let i = 0; i < 10; i++) {
            const newStar = { x: (i * 200) + 50, y: (j * 200) + 100, s: random(0.25, 1)}
            shine (newShine.x, newShine.y, newShine.s);
            shineArray.push(newShine);
            }
        } 
    }
};

function draw(x, y, s, shine) {
    //star
    push();
    translate(width * 0.2, height * 0.5);
    rotate(frameCount / 200.0);
    star(0, 0, 5, 70, 3);
    pop();
}

function shine(x,y,s,shine) {
    push();
    translate(x, y);
    scale(s);
    fill(245, 126, 16);
}