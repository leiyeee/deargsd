/*
var lines = [];
var markov;
var text1;
var text2;
x = 160;
y = 240;

function preload() {

    text1 = loadStrings('assets/1.txt');
    text2 = loadStrings('assets/2.txt');
}

function setup() {

    var canvas = createCanvas(500, 500);
    canvas.parent('gen')
    textFont('times', 16);
    textAlign(LEFT);

    lines = ["click to (re)generate!"];

    // create a markov model w' n=4
    markov = new RiMarkov(5);

    // load text into the model
    markov.loadText(text1.join(' '));
    markov.loadText(text2.join(' '));

    drawText();
}

function drawText() {

    background(250);
    text(lines.join(' '), x, y, 400, 400);
}

function mouseClicked() {

    x = y = 50;
    lines = markov.generateSentences(10);
    drawText();
}
*/
const textToWrite = "DEAR GSD";
const frequency = 0.002;
const fontSize = 150;

//auto start variables
let centerX, centerY, startX, step, amplitude;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('gen')
    canvas.style('z-index','-3');
    centerX = windowWidth / 2;
    centerY = windowHeight / 2;
    textFont('Helvetica');
    textSize(fontSize);

    step = 0;
    startX = centerX - textWidth(textToWrite) / 2;
}

function getY(x) {
    return centerY / 2 + noise(step, x * frequency) * amplitude;
}

function draw() {
    background(255);
    fill(0);

    //for calculating the noise in getY function
    step += 0.01;
    amplitude = map(mouseY, 0, height, 300, 800);

    //draw liquid
    beginShape();
    vertex(0, height);
    for (let x = 0; x < width; x += 20) {
        vertex(x, getY(x));
    }
    vertex(width, getY(width));
    vertex(width, height);
    endShape(CLOSE);

    //draw text
    let x = startX;
    for (var i = 0; i < textToWrite.length; i++) {
        let charWidth = textWidth(textToWrite.charAt(i));
        x += charWidth / 2;
        let y = getY(x);

        //calculate angle
        let angle = atan2(getY(x - charWidth / 2) - getY(x + charWidth / 2), -fontSize) + PI;
        angle *= 2; //expression
        push();
        //apply angle
        translate(x, y);
        rotate(angle);
        translate(-x, -y);
        text(textToWrite.charAt(i), x - charWidth / 2, y);
        pop();
        x += charWidth / 2;
    } //for
}

function mouseMoved() {
    startX = mouseX - textWidth(textToWrite) / 2;
}
