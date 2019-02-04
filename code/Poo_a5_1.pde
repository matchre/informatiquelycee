Balle b;
class Balle {
 int posX;
 int posY;
 int depX;
 int depY;
 // le constructeur
 Balle (){
  posX=int(10+random(180));
  posY=int(10+random(180));
  depX=int(-5+random(5));
  depY=int(-5+random(5));
  while(depX==0 || depY==0){
    depX=int(-5+random(5));
    depY=int(-5+random(5));
  }  
 }
 void afficheBalle(){
   ellipse(posX,posY,20,20);
 }
 void depBalle (){
  if (posX<10 || posX>190){
    depX=-depX;
  }
  if (posY<10 || posY>190){
    depY=-depY;
  }
  posX=posX+depX;
  posY=posY+depY;
 }
}

void setup() {
  size(200,200);
  noStroke();
  fill(0);
  b = new Balle();
}
void draw(){
  background(255);
  b.depBalle();
  b.afficheBalle();
}
