// comet

let comet;  /// parent object to spark fragments
let sparks = []; /// spark fragments
let noofsparks = 125;
let pg;

function setup() {
  createCanvas(windowWidth,
    windowHeight);
  comet = new fireball(); /// instantiate fireball object
  for (let i = 0; i < noofsparks; i++) { /// instantiate all spark objects
    sparks.push(new minifireball());
  }
}

function draw() {
  background(0, 0, 0, 3); /// set background for canvas
  let s = second(); /// assign p5's time method for seconds
  if (s === 0) {
  background(0, 25, 75, 255); /// set background of graphics page
  } 
  if (s / 5 === int(s / 5)) { /// check for each 5 seconds
          /// trigger a new comet - set starting values for comet
    comet.pos = createVector(-40, height * random(0.01,
                                              0.4));/// comet's starting position
    comet.vel = createVector(random(2,3), random(0.33)); /// comet's starting velocity
    comet.vel.mult(2); /// comet's starting velocity multiplier (step up speed)
    comet.mass = random(12, 18); /// comet's starting size - shrinks with each new spark
    for (let i = 0; i < noofsparks; i++) { /// reset old sparks to comet's starting values
      sparks[i].pos = createVector(comet.pos.x, comet.pos.y); /// set to comet's position
      sparks[i].vel = createVector(0, 0); /// set to no movement until activated
      sparks[i].lifespan = 0; /// zero = newborn / 255 = death
      sparks[i].burnrate = random(1, 2); /// set random speed-thru-duration until vanishing
    }

  }
  if (comet.mass > 1) {  /// comet's has mass still, so animate
    comet.update(); /// calculate next values
    comet.bounds(); /// check next values for validity
    comet.render(); /// show comet
  }
  for (let i = 0; i < noofsparks; i++) { /// run thru array, make new spark if yesspark  
    let yesspark = random(1);
    if (yesspark < 0.01) {
      sparks[i].makenew(comet.pos, comet.vel); /// send comet's values into making new spark
    }
    sparks[i].update(); /// show any spark that is alive
  } /// end loop
} /// end draw

 /// go fullscreen for screen saver
function mousePressed() {
  if (mouseX > 0 && mouseX < width &&
    mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

/// Creates a comet-like object that flies from left to right across the screen
function fireball() {
  this.pos = createVector(-45, height * random(0.01,
                                              0.4)); /// start at left - high in sky
  this.vel = createVector(2, 0.25); /// set a random speed
  this.vel.mult(2); /// use fixed multiply for speed
  this.mass = random(9,18); /// set initial size of comet - decremented by each new spark that is made

  this.update = function() { /// move comet
    this.pos.add(this.vel);
  }

  this.bounds = function() { /// is comet of the canvas
    if (this.pos.x > width ||
      this.pos.y > height) {
      this.pos = createVector(-15, height / 2);
    }
  }

  this.render = function() { /// make comet for display
    push(); /// encapsulate comet attributes
    stroke(255, 255, 255, 180);
    strokeWeight(this.mass); /// size according to comet's mass
    point(this.pos); /// place comet on canvas
    stroke(255, 225, 255, random(80,175));
    strokeWeight(this.mass*random(0,random(2,3.5))); /// size according to comet's mass
    point(this.pos); /// place comet on canvas
    pop();
  }
}


/// creates sparks that leave a parent object moving across the screen
function minifireball() { 
  this.pos = createVector(-15, width / 2); /// set to comet's starting position
  this.vel = createVector(0, 0); /// set motion to stopped
  this.lifespan = 0; /// zero = newborn / 255 = death /// set life to newborn
  this.burnrate = random(2, 3.25); /// set varied duration to remain visible

  this.makenew = function(cometpos, cometvel) { /// make a new spark
    comet.mass -= 0.1; /// decrement comet's size for each new spark
    if (comet.mass <= 1) { /// check if comet is melted
      comet.mass = 1; /// set melted comet's size to smallest (spark size)
    }
    if (comet.mass > 1) { /// check if comet is not melted
      this.pos = createVector(comet.pos.x, comet.pos.y); /// set to comet's position
      this.vel = createVector(comet.vel.x, comet.vel.y+random(-0.03,0.15)); /// set to comet's velocity
      this.lifespan = 0; /// newborn spark starts at 0, dies at 255
      const yesspire = random(1);
      if (yesspire < 0.1){
      push();
      stroke(255,200,0,180);
      strokeWeight(random(1,2));
      let spire = random(5,10);
      translate(this.pos);
      line(0,-spire*1.5,
           0,spire*1.5);
        line(-spire*1.5,0,
             spire*1.5,0);
      line(-spire,-spire,
           spire,spire);
      line(spire,-spire,
           -spire,spire);
      pop();
      }
    }
  }

  this.update = function() { /// move spark, live and burn colors
    this.lifespan += this.burnrate; /// life pass by burnrate speed
    if (this.lifespan >= 255) { /// check if too old
      this.lifespan = 255; /// set to old age
    }

    if (this.lifespan < 255) { /// check if not old
      this.vel.mult(0.99); /// reduce speed to almost stopped
      this.pos.add(this.vel); /// move by reduced speed
      push(); /// encapsulate spark attributes
      stroke(255, 255 - this.lifespan, 0, 255); /// color shows lifespan
      if (this.lifespan > 254){
      strokeWeight(random(3,5));
      stroke(255,225,0,255);
      } else {
      strokeWeight(3);
      }
      point(this.pos);
      pop();
    }
  }
}

function mtrange() {
  this.render = function() { 
      for (let i = 0; i < 2; i++) { /// make two passes with different colors i
      this.yoff = random(5); /// slightly alter each passes y offset
      pg.fill(10, 10, 50 - (i * 30), 255); /// dark blue then black
      this.xoff += i * 0.1; /// slightly alter each passes x offset
      this.yoff = i * 0.01; /// implement y offset alteration
      for (let x = 0; x <= width; x += width/15) { /// step through each x to the end of canvas
        this.y = map(noise(this.xoff, this.yoff), 0, 1, 
          height * 0.60, height * 0.90); /// generate a unique y at each x
        pg.vertex(x, this.y); /// implement segment of mountain wave
        this.xoff += 0.5; /// implement horizontal alteration
      }
      this.yoff += 0.1; /// produce next unique y position
      pg.vertex(width, this.y); /// ensure complete horizontal range-to-canvas
      pg.vertex(width, height); /// tie top of shape to bottom right corner
      pg.vertex(0, height); /// tie right corner to left corner
      pg.endShape(CLOSE); /// tie right corner to first position at top left
    }
  }
}

/// generates a starfield imbedded in a graphics page pg.
class Starfield {
  constructor() { /// declare and assign starting values 
    this.x = []; /// non-vector x array
    this.y = []; /// non-vector y array
    this.brite = []; /// set how brilliant star is in brightness
    this.bigness = []; /// set how visible star is in size
  }

  make() { /// generate random stars for displaying
    for (let i = 0; i < 100; i++) { 
      this.x[i] = random(0, width);
      this.y[i] = random(0, height);
      this.brite[i] = random(100, 200);
      this.bigness[i] = random(2, 4);
    }
  }
}
