int posX;
void setup(){
  size(200,200);
  noStroke();
  fill(255,0,0);
  posX=10;
}
void draw(){
  background(255);
  posX=posX+2;
  ellipse(posX,100,20,20);
}
