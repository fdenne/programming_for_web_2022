function setup() {
    createCanvas(800, 900);
}

let cards = [];

function draw() {
    background("white");
    noLoop();
    noStroke();
    fill("#f9f9e4");
    for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
            const newCard = { x: i * 150, y: j * 150, width: 100, height: 100 }
            rect(newCard.x, newCard.y, newCard.width, newCard.height);
            cards.push(newCard);
        }
    }
    fill("#54af79");
    textSize(45);
    text("your score: ", 150, 610);
}