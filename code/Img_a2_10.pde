PImage img;
PImage img1;
void setup(){
  size(208,242);
  img=loadImage("./asset/tux.jpg");
}
void draw(){
  background(0);
  img1=img.get(mouseX-35,mouseY-35,70,70);
  image(img1,mouseX-35,mouseY-35);
}