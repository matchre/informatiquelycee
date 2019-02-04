float angle;
void setup(){
  size(200,200);
  angle=0;
}
void draw(){
  background(0);
  translate(100,100);
  ellipse (0,0,20,20);
  rotate(angle);
  rect(-5,10,10,40);
  for (int i=0;i<7;i++){
    rotate(radians(45));
    rect(-5,10,10,40);
  }
  angle=angle+0.03;
}
