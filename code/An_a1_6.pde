int posX;
int posY;
int depX;
int depY;
void setup(){
  size(200,200);
  noStroke();
  fill(255,0,0);
  posX=int(10+random(180));
  posY=int(10+random(180));
  depX=int(1+random(5));
  depY=int(1+random(5));
}
void draw(){
  background(255);
  if (posX<=10 || posX>=190){
    depX=-depX;
  }
  if (posY<=10 || posY>=190){
    depY=-depY;
  }  
  posX=posX+depX;
  posY=posY+depY;
  ellipse(posX,posY,20,20);
}
