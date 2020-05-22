
function setup() {
    
    var canvas = createCanvas(0.9 * windowWidth, 0.8 * windowHeight);
    canvas.parent('sketch-div');
    background(32);
}

function draw() {
    let c = color('#0f0');

    background(255);
    fill(c);
    ellipse(mouseX, mouseY, 25, 25);
}