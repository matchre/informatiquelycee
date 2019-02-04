Mobile mob1;
Mobile mob2;
float m1;
float m2;
float G;
void setup(){
  size(400,400);
  m1 = 6e24;
  m2 = 2e30;
  mob1=new Mobile(50,height/2,m1,5,color(0,255,255));
  mob2=new Mobile(width/2,height/2,m2,50,color(255,255,0));
  G=6.67e-26;
  mob1.setVit(new PVector(0,30));
}
void draw(){
  background(255);
  float dt=1/frameRate;
  PVector M1M2=PVector.sub(mob2.OM,mob1.OM);
  float d=M1M2.mag();
  PVector F21=new PVector(M1M2.x,M1M2.y);
  F21.normalize();
  float F=(G*m1*m2)/sq(d);
  F21.mult(F);
  if (d>55) {
    mob1.ajoutForce(F21);
  }
  else{
   mob1.setVit(new PVector(0,0)); 
  }
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
  boolean fix=false;
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
