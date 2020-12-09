

float angle;
PFont font; 


void setup()
{
  size(screen.width,screen.height);
  frameRate(10);
  smooth();
  
}

void draw()
{  
  noStroke();
  fill(0, 0, 0, 20); // adds halo or transparecy
  rect(0, 0, width, height); 
    
  rotate(random(-1,+1)); // rotate text random
  fill(155);
  textSize(random(200));
  textAlign(CENTER, CENTER);
  text("Dear GSD", random(width), random(height));
}
