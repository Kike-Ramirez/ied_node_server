function setup() {
    var canvas = createCanvas(0.9 * windowWidth, 0.8 * windowHeight);
    canvas.parent('sketch-div');
    background(32);
}

function draw() {
    fill(255);
    ellipse(mouseX, mouseY, 25, 25);
}