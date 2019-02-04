float angle1;
float angle2;
void setup(){
  size(200,200);
  angle1=0;
  angle2=0;
}
void draw(){
  background(0);
  pushMatrix();
  translate(100,100);
  ellipse (0,0,20,20);
  rotate(angle1);
  rect(-5,10,10,40);
  for (int i=0;i<7;i++){
    rotate(radians(45));
    rect(-5,10,10,40);
  }
  popMatrix();
  translate(56,56);
  rotate(angle2);
  rect(-10,-10,20,20);
  angle1=angle1+0.02;
  angle2=angle2-0.1;
  
}
