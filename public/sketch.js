
function setup() {
    
    var canvas = createCanvas(0.9 * windowWidth, 0.8 * windowHeight);
    canvas.parent('sketch-div');
    background(32);
}

function draw() {
    let c = color('#f00');

    background(255);
    fill(c);
    rect(mouseX, mouseY, 50, 50);
}