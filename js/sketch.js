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
