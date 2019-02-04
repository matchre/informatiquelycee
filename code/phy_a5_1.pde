Mobile mob;
Mobile mob1;
float g;
float m;
float R;
void setup(){
  size(200,300);
  m = 100;
  g=9.8;
  mob=new Mobile(width/4,3,m,3,color(255,0,0));
  mob1=new Mobile(3*width/4,3,m,3,color(0,255,0));
}
void draw(){
  background(255);
  float dt=1/frameRate;
  R=0.5*0.5*1.2*PI*9*sq(mob.v.mag());
  PVector Fr;
  Fr = mob.v.get();
  Fr.normalize();
  Fr.mult(-R);
  mob.ajoutForce(Fr);
  PVector P=new PVector(0,g*m);
  mob.ajoutForce(P);
  mob1.ajoutForce(P);
  mob.update(dt);
  mob1.update(dt);
  mob.affiche();
  mob1.affiche();
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
