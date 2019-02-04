var mob;
var m;
var normeP;
function setup(){
  createCanvas(600,400);
  m=1;
  normeP=98*m;
  mob=new Mobile(20,390,m,2,255,0,0);
  mob.setVit(createVector(100,-250));
}
function draw(){
  //background(255);
  var dt=0;
  if (frameRate()>0){
    dt=1/frameRate();
  }
  P=createVector(0,normeP);
  mob.ajoutForce(P);
  mob.update(dt);
  mob.affiche();
}
