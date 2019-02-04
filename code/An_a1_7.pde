int posX1, posX2;
int posY1, posY2;
int depX1, depX2;
int depY1, depY2;
float d;
boolean coll(){
  d=sqrt(sq(posX1-posX2)+sq(posY1-posY2));
  if (d<20.0){
    return true;
  }
  else{
    return false;
  }
}
void setup(){
  size(200,200);
  noStroke();
  posX1=int(10+random(180));
  posY1=int(10+random(180));
  depX1=int(-4+random(4));
  depY1=int(-4+random(4));
  posX2=int(10+random(180));
  posY2=int(10+random(180));
  depX2=int(1+random(3));
  depY2=int(1+random(3));
}
void draw(){
  background(255);
  if (!coll()){
    if (posX1<=10 || posX1>=190){
      depX1=-depX1;
    }
    if (posY1<=10 || posY1>=190){
      depY1=-depY1;
    }  
    posX1=posX1+depX1;
    posY1=posY1+depY1;
    fill(255,0,0);
    ellipse(posX1,posY1,20,20);
    if (posX2<=10 || posX2>=190){
      depX2=-depX2;
    }
    if (posY2<=10 || posY2>=190){
      depY2=-depY2;
    }  
    posX2=posX2+depX2;
    posY2=posY2+depY2;
    fill(0,255,0);
    ellipse(posX2,posY2,20,20);
  }
}
