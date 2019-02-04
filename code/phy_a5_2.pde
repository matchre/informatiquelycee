Mobile mob1;
Mobile mob2;
float g;
float m1;
float m2;
float R1;
float R2;
void setup(){
  size(200,300);
  m1 = 100;
  m2 =500;
  g=9.8;
  mob1=new Mobile(width/4,3,m1,3,color(255,0,0));
  mob2=new Mobile(3*width/4,3,m2,3,color(0,255,0));
}
void draw(){
  background(255);
  float dt=1/frameRate;
  R1=0.5*0.5*1.2*PI*9*sq(mob1.v.mag());
  PVector Fr1;
  Fr1 = mob1.v.get();
  Fr1.normalize();
  Fr1.mult(-R1);
  mob1.ajoutForce(Fr1);
  R2=0.5*0.5*1.2*PI*9*sq(mob2.v.mag());
  PVector Fr2;
  Fr2 = mob2.v.get();
  Fr2.normalize();
  Fr2.mult(-R2);
  mob2.ajoutForce(Fr2);
  PVector P1=new PVector(0,g*m1);
  mob1.ajoutForce(P1);
  PVector P2=new PVector(0,g*m2);
  mob2.ajoutForce(P2);
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
