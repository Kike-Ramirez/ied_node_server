let HOST = location.origin.replace(/^http/, 'ws')
let ws = new WebSocket(HOST);
let el;

let x;
let y;
let col;

ws.onmessage = (event) => {
    var res = event.data.split(" ");
    
    if (res.length > 1) {
        if (res[0] === 'X:') {
            x = parseFloat(res[1]);
            y = parseFloat(res[3]);
        }

        if (res[0] === "Color:") {
            console.log("Color");
            col = color(parseFloat(res[1]), parseFloat(res[2]), parseFloat(res[3]));
        }

    }
};

function setup() {
    
    var canvas = createCanvas(1280, 720);
    col = color(0, 0, 0);
    
    x = 0.5 * width;
    y = 0.5 * height;

    canvas.parent('sketch-div');
    background(32);
}

function draw() {

    background(255);
    fill(col);
    rect(x, y, 50, 50);
}

function mouseMoved() {

    x = mouseX;
    y = mouseY;

    let message = "X: " + x + " Y: " + y;
    console.log(message);
    ws.send(message);

}