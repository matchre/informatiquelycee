var mob;
var masse;
var normeP;
function setup(){
  createCanvas(200,400);
  masse=1;
  normeP=98*masse;
  mob=new Mobile(100,10,masse,10,255,0,0);
}
function draw(){
  background(255);
  var dt=0;
  if (frameRate()>0){
    dt=1/frameRate();
  }
  P=createVector(0,normeP);
  mob.ajoutForce(P);
  mob.update(dt);
  mob.affiche();
}
