Mobile mob;
void setup(){
  size(200,200);
  mob=new Mobile();
}
void draw(){
  background(255);
  float dt=1/frameRate;
  mob.update(dt);
  mob.affiche();
}
class Mobile {
  PVector OM;
  //création du vecteur "déplacement"
  PVector dOM;
  //création du vecteur vitesse
  PVector v;
  Mobile(){
    OM = new PVector(10,height/2);
    dOM = new PVector();
    v = new PVector(60,50); 
  }
  void affiche(){
    fill(0);
    ellipse(OM.x,OM.y,20,20);  
  }
  void update(float dt){
    if (OM.x>width-10){
      OM.x=width-10;
      v.x=-v.x;
    }
    if (OM.x<10){
      OM.x=10;
      v.x=-v.x;
    }
    if (OM.y>height-10){
      OM.y=height-10;
      v.y=-v.y;
    }
    if (OM.y<10){
      OM.y=10;
      v.y=-v.y;
    }
    dOM = PVector.mult(v,dt);
    OM.add(dOM);
  }
}