var mob1;
var mob2;
var m1;
var m2;
var G;
function setup(){
  createCanvas(400,400);
  m1=6e24;
  m2=2e30;
  mob1=new Mobile(50,height/2,m1,5,0,255,255);
  mob2=new Mobile(width/2,height/2,m2,50,255,255,0);
  G=6.67e-26;
  mob1.setVit(createVector(0,30));
}
function draw(){
  background(255);
  var dt=0;
  if (frameRate()>0){
    dt=1/frameRate();
  }
  M1M2=p5.Vector.sub(mob2.OM,mob1.OM);
  d=M1M2.mag();
  console.log(d);
  F21=createVector(M1M2.x,M1M2.y);
  F21.normalize();
  F=(G*m1*m2)/sq(d);
  F21.mult(F);
  if (d>55) {
    mob1.ajoutForce(F21);
  }
  else {
    mob1.setVit(createVector(0,0)); 
  }
  mob1.update(dt);
  mob2.update(dt);
  mob1.affiche();
  mob2.affiche();
}

