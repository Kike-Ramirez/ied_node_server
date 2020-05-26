let HOST = location.origin.replace(/^http/, 'ws')
let ws = new WebSocket(HOST);
let el;

let x;
let y;

ws.onmessage = (event) => {
    var res = event.data.split(" ");
    
    if (res.length > 1) {
        x = parseFloat(res[1]);
        y = parseFloat(res[3]);
    }
};

function setup() {
    
    var canvas = createCanvas(1280, 720);
    
    x = 0.5 * width;
    y = 0.5 * height;

    canvas.parent('sketch-div');
    background(32);
}

function draw() {
    let c = color('#f00');
    console.log(x);

    background(255);
    fill(c);
    rect(x, y, 50, 50);
}

function mouseMoved() {

    x = mouseX;
    y = mouseY;

    let message = "X: " + x + " Y: " + y;
    console.log(message);
    ws.send(message);

}