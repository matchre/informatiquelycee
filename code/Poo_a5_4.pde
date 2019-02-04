Balle[] tabBalle= new Balle[100];
class Balle {
 int posX, posY;
 int depX, depY;
 int r,v,b;
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
  r=int(random(256));
  v=int(random(256));
  b=int(random(256));
 }
 void afficheBalle(){
   fill(r,v,b);
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
  for (int i=0;i<tabBalle.length;i=i+1){
    tabBalle[i]=new Balle();
  }
}
void draw(){
  background(255);
  for (int i=0;i<tabBalle.length;i=i+1){
    tabBalle[i].depBalle();
    tabBalle[i].afficheBalle();
  }
}
