Mobile mob1;
Mobile mob2;
float g;
float masse1;
float masse2;
void setup(){
  size(200,200);
  masse1 = 5;
  masse2 = 50;
  g=9.8;
  mob1=new Mobile(width/4,3,masse1,3,color(255,0,0));
  mob2=new Mobile(3*width/4,3,masse2,6,color(0,255,0));
}
void draw(){
  background(255);
  float dt=1/frameRate;
  PVector F1=new PVector(0,masse1*g);
  PVector F2=new PVector(0,masse2*g);
  mob1.ajoutForce(F1);
  mob2.ajoutForce(F2);
  mob1.update(dt);
  mob2.update(dt);
  mob1.affiche();
  mob2.affiche();
}
class Mobile {
  PVector OM;
  PVector dOM;
  PVector v;
  PVector dv;
  PVector a;
  PVector sommeF;
  float m;
  int r;
  color c;
  Mobile(int x, int y, float masse, int rayon, color couleur){
    OM = new PVector(x,y);
    dOM = new PVector();
    v = new PVector();
    dv = new PVector();
    a = new PVector();
    sommeF = new PVector();
    m = masse;
    r = rayon;
    c=couleur;
  }
  void affiche(){
    fill(c);
    ellipse(OM.x,OM.y,2*r,2*r);  
  }
  void setVit(PVector vit){
    v.x=vit.x;
    v.y=vit.y;
  }
  void update(float dt){
    a= PVector.mult(sommeF,1/m);
    dv = PVector.mult(a,dt);
    v.add(dv);
    dOM = PVector.mult(v,dt);
    OM.add(dOM);
    sommeF.mult(0);
  }
  void ajoutForce(PVector F){
    sommeF.add(F);
  }
}
