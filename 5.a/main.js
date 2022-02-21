let myCard;
const DOWN = "down";
const UP = "up";
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardfaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('img/card-back.png');
    cardfaceArray = [
        loadImage("img/bulbasaur.png"),
        loadImage("img/charmander.png"),
        loadImage("img/eevee.png"),
        loadImage("img/jigglypuff.png"),
        loadImage("img/meowth.png"),
        loadImage("img/psyduck.png"),
        loadImage("img/snorlax.png"),
        loadImage("img/squirtle.png")
    ]
}
function setup() {
    createCanvas(800, 900);
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selecrted again
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const faceImage = selectedFaces.pop();
        cards.push(new Card(startingX, startingY, faceImage));
        startingX += 150;
    }
    startingY += 150;
    startingX = 100;
    }
}

function draw() {
    background(255);
    if (gameState.numMatched === gameState.totalPairs) {
        fill("#EA80BE");
        noStroke();
        textSize(36);
        text("you caught them all!", 215, 800);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if(!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill("#54AF79");
    noStroke();
    textSize(36);
    text(gameState.attempts + " attempts", 500, 750);
    text("matches " + gameState.numMatched, 100, 750);
    text("who's that pokemon?", 220, 50);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, and then
        // we can trigger the flip
        if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log("flipped", cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            // cards match!
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 120;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch) {
            stroke("#363C3D");
          strokeWeight(2);
            fill("#F9F9E4");
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x + 11, this.y + 10);
        } else {
            fill("#54AF79");
          // noStroke();
          stroke("#363C3D");
          strokeWeight(2);
          rect(this.x, this.y, this.width, this.height, 10);
          image(cardBack, this.x + 11, this.y + 10);
        }
        
    }

    didHit (mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }
    flip() {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
    
}
function shuffleArray (array) {
        let counter = array.length;
        while (counter > 0) {
            // pick random index
            const idx = Math.floor(Math.random() * counter);
            // decrease counter by 1 (decrement)
            counter--;
            //swap the last element with it
            const temp = array[counter];
            array[counter] = array[idx];
            array[idx] = temp;
        }
        return array;
    }