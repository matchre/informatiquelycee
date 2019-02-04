int posX;
int depX;
void setup(){
  size(200,200);
  noStroke();
  fill(255,0,0);
  posX=10;
  depX=2;
}
void draw(){
  background(255);
  if (posX<10 || posX>=190){
    depX=-depX;
  }  
  posX=posX+depX;
  ellipse(posX,100,20,20);
}
