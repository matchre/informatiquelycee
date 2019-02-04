Mobile mob;
Mobile mob1;
Mobile mob2;
float g;
float m;
float m1;
float R1;
float R2;
float temps;
void setup(){
  size(300,300);
  background(255);
  m = 100;
  m1 = 500;
  g=9.8;
  mob=new Mobile(0,0,m,3,color(255,0,0));
  mob1=new Mobile(0,0,m,3,color(0,255,0));
  mob2=new Mobile(0,0,m1,3,color(0,0,255));
  temps=0;
}
void graph(float temps){
  stroke(0,255,0);
  point(40*temps,(height-8*mob1.v.mag()));
  stroke(255,0,0);
  point(40*temps,(height-8*mob.v.mag()));
  stroke(0,0,255);
  point(40*temps,(height-8*mob2.v.mag()));
}
void draw(){
  noStroke();
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
  PVector P=new PVector(0,g*m);
  mob.ajoutForce(P);
  mob1.ajoutForce(P);
  PVector P1=new PVector(0,g*m1);
  mob2.ajoutForce(P1);
  mob.update(dt);
  mob1.update(dt);
  mob2.update(dt);
  temps=temps+dt;
  graph(temps);
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
