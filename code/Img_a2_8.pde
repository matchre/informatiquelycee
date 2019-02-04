/* @pjs preload="./asset/tux.jpg"; */
PImage img;
int ro,ve,bl;
void setup(){	
  size (208,242);
  img=loadImage("./asset/tux.jpg");
  noStroke(); 
  loadPixels();
  background(0);
}
void draw(){
  int x=int(random(208));
  int y=int(random(242));
  int i=x+y*208;
  ro=int(red(img.pixels[i]));
  ve=int(green(img.pixels[i]));
  bl=int(blue(img.pixels[i]));
  fill(ro,ve,bl,100);
  rect(x,y,10,10);
}