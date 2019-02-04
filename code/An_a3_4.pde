boolean g,d,b,h;
int posX, posY;
void deplacement(){
  if (g && posX>10){
    posX=posX-2;
  }
  if (d && posX<190){
    posX=posX+2;
  }
  if (h && posY>10){
    posY=posY-2;
  }
  if (b && posY<190){
    posY=posY+2;
  }
}
void setup(){
  size(200,200);
  noStroke();
  fill(0);
  posX=100;
  posY=100;
  g=false;
  d=false;
  b=false;
  h=false;
}
void draw(){
  background(255);
  deplacement();
  ellipse(posX,posY,20,20);
}
void keyPressed(){
  if (key==CODED){
    if (keyCode==UP){
      h=true;
    }
    if (keyCode==DOWN){
      b=true;
    }
    if (keyCode==LEFT){
      g=true;
    }
    if (keyCode==RIGHT){
      d=true;
    }
  }
}
void keyReleased(){
  if (key==CODED){
    if (keyCode==UP){
      h=false;
    }
    if (keyCode==DOWN){
      b=false;
    }
    if (keyCode==LEFT){
      g=false;
    }
    if (keyCode==RIGHT){
      d=false;
    }
  }
}
