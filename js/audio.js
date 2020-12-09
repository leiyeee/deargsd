let sound;
let bgColor;
let analyzer;

function preload() {
    sound = loadSound('./assets/KW.mp3');
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('kw')
    canvas.style("z-index","-1")
    analyzer = new p5.Amplitude();
    analyzer.setInput(sound);
    fft = new p5.FFT();
}

function draw() {
    background(0);
    let rms = analyzer.getLevel();
    fill(230, 16, 141, 150);
    noStroke();
    circle(width / 2, height / 2, rms * width);

    let spectrum = fft.analyze();
    noStroke();
    fill(255);
    for (let i = 0; i < spectrum.length; i += 12) {
        fill(46, 81, 155);
        let x = map(i, 0, spectrum.length, 0, width * 1.35);
        let h = map(spectrum[i], 0, 255, height, 0);
        for (let j = height; j > h + 10; j -= 25) {
            fill(random(0, 127), random(127, 255), (127, 255));
            textSize(20);
            text(int(random(0, 2)), x + 10, j);
        }
        text(1, x + 10, h + 12);
        fill(152, 243, 0);
        textSize(15);
        text(spectrum[i], x + 5, h);
    }
    beginShape();
    stroke(255);
    noFill();
    for (let i = 0; i < spectrum.length; i += 6) {
        let x = map(i, 0, spectrum.length, 0, width * 1.35);
        let y = map(spectrum[i], 0, 255, height, 0);
        curveVertex(x, y - 60);
    }
    endShape();
}

function mousePressed() {
    bgColor = color(255, 0, 0);
    if (sound.isPlaying() == false) {
        sound.loop();
        analyzer = new p5.Amplitude();
        analyzer.setInput(sound);
    }
}

function mouseReleased() {
    bgColor = color(0, 0, 255);
    sound.stop();
}
