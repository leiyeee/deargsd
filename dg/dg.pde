// David Mrugala

float angle;
PFont font; 

void setup()
{
  size(600, 600);
  frameRate(6);
  smooth();

}

void draw()
{  
  noStroke();
  fill(0, 0, 0, 20); // adds halo or transparecy
  rect(0, 0, width, height); 
    
  rotate(random(-1,+1)); // rotate text random
  fill(255);
  textSize(random(200));
  textAlign(CENTER, CENTER);
  text("Dear GSD", random(width), random(height));
}
