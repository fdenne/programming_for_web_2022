function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES)
    rectMode(CENTER)
}

function draw() {
    translate(width / 2, height / 2)

    for (var i = 0; i < 200; i++) {
        push()
        rotate(sin(frameCount + i * 5) * 50)

        var r = map(sin(frameCount), -1, 1, 154, 185)
        var g = map(cos(frameCount / 2), -1, 1, 245, 255)
        var b = map(sin(frameCount / 4), -1, 1, 255, 179)
        stroke(r, g, b)
        rect(0, 600 - i * 4, 500 - i * 2, 800 - i)
        pop()
    }
}