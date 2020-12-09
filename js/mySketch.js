/*let sound;
let bgColor;
let analyzer;

function preload(){
  sound = loadSound('./4.mp3');
}

function setup(){
  let canvas = createCanvas(windowWidth,windowHeight);
    canvas.parent('kk')
  canvas.mouseClicked(play);
  fft = new p5.FFT();
  sound.amp(0.3);
}

function draw(){
  background(255,255,255);

  let spectrum = fft.analyze();
  noStroke();

  for (let i = 0; i< spectrum.length; i++){
		  fill(0, 0, 0);
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x*2, height, width / spectrum.length * 5, h );
		fill(0,0,0,40);
		rect(x*2, height, width / spectrum.length * 5, h*1.3 );
		
  }
	
	//play button
	noFill();
	stroke(0,0,0);
	strokeWeight(5);
	circle(width/2, height/4, 100);
	noStroke();
	fill(0,0,0);
	triangle((width/2)-10,(height/4)-15,(width/2)-10,(height/4)+20,(width/2)+20,(height/4)+2);
  if (sound.isPlaying()) {
  	fill(255,255,255);
		circle(width/2,height/4,95);
		fill(0,0,0);
		rect((width/2)-15,(height/4)-15,10,35);
		rect((width/2)+5,(height/4)-15,10,35);
	} else {
		fill(0,0,0);
		triangle((width/2)-10,(height/4)-15,(width/2)-10,(height/4)+20,(width/2)+20,(height/4)+2);
  }
	
	
}

function play() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}*/