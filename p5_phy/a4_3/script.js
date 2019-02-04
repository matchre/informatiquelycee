var mob1;
var mob2;
var m1;
var m2;
var normeP1;
var normeP2;
function setup(){
  createCanvas(200,400);
  m1=1;
  m2=5;
  normeP1=98*m1;
  normeP2=98*m2;
  mob1=new Mobile(50,10,m1,10,255,0,0);
  mob2=new Mobile(150,10,m2,20,0,255,0);
}
function draw(){
  background(255);
  var dt=0;
  if (frameRate()>0){
    dt=1/frameRate();
  }
  P1=createVector(0,normeP1);
  P2=createVector(0,normeP2);
  mob1.ajoutForce(P1);
  mob2.ajoutForce(P2);
  mob1.update(dt);
  mob1.affiche();
  mob2.update(dt);
  mob2.affiche();
  
}
