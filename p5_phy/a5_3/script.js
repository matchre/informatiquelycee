var mob1;
var mob2;
var mob3;
var m1;
var m2;
var m3;
var normeP1;
var normeP2;
var normeP3;
var normeFr2;
var normeFr3;
var PI=3.14;
var time;
function setup(){
  createCanvas(300,300);
  m1=100;
  m2=100;
  m3=500;
  normeP1=9.8*m1;
  normeP2=9.8*m2;
  normeP3=9.8*m3;
  mob1=new Mobile(50,10,m1,5,255,0,0);
  mob2=new Mobile(150,10,m2,5,0,255,0);
  mob3=new Mobile(150,10,m3,5,0,0,255);
  time=0;
}
function draw(){
  var dt=0;
  if (frameRate()>0){
    dt=1/frameRate();
  }
  normeFr2=0.5*0.5*1.2*PI*25*sq(mob2.v.mag());
  normeFr3=0.5*0.5*1.2*PI*25*sq(mob3.v.mag());
  Fr2=createVector(mob2.v.x,mob2.v.y);
  Fr2.normalize();
  Fr2.mult(-normeFr2);
  Fr3=createVector(mob3.v.x,mob3.v.y);
  Fr3.normalize();
  Fr3.mult(-normeFr3);
  P1=createVector(0,normeP1);
  P2=createVector(0,normeP2);
  P3=createVector(0,normeP3);
  mob1.ajoutForce(P1);
  mob2.ajoutForce(P2);
  mob3.ajoutForce(P3);
  mob2.ajoutForce(Fr2);
  mob3.ajoutForce(Fr3);
  mob1.update(dt);
  mob2.update(dt);
  mob3.update(dt);
  time=time+dt;
  graph(time);
}
function graph(temps){
  stroke(0,255,0);
  point(40*temps,(height-8*mob2.v.mag()));
  stroke(255,0,0);
  point(40*temps,(height-8*mob1.v.mag()));
  stroke(0,0,255);
  point(40*temps,(height-8*mob3.v.mag()));
}
