void setup(){
  background(255);
  fill(255);
  size(200,200);
}
void draw(){
  rect(80,80,40,40);
}
void keyPressed(){
  if (key=='r'){
    fill(255,0,0);
  }
  if (key=='v'){
    fill(0,255,0);
  }
  if (key=='b'){
    fill(0,0,255);
  }
}
void keyReleased(){
  fill(255);
}



