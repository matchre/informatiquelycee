var tx= [100, 5,  350, 290];
var ty= [10, 60, 200, 300] ;
var sel ;         // indice point sélectionné
var r=6 ;         // rayon "points"
var rempl=10 ;
var Xmax = 600 ;  // dimensions canvas
var Ymax = 500 ;

function setup(){
  createCanvas(Xmax, Ymax) ;
  sel = -1 ;
  draw() ;
}

function draw(){
  var xx = mouseX ;
  var yy = mouseY ;
  background(250) ;
  if (xx>0 && xx<Xmax && yy>0 && yy < Ymax &&sel != -1) {
    tx[sel]=mouseX ;
    ty[sel]=mouseY ;
  }
  // Courbe
  fill(0,0,0,rempl) ;
  stroke(255,0,0) ;
  bezier(tx[0], ty[0], tx[1], ty[1], tx[2], ty[2], tx[3], ty[3]) ;
  // Points et poignées
  fill(0,0,0)
  for (i=0 ; i<4 ; i++) {
    if (i==0 || i==3)  {
      fill(255,0,0) ;
      stroke(255,0,0) ;
    } else {
      fill(0,0,255) ;
      stroke(0,0,255) ;
    }
    ellipse(tx[i],ty[i],r,r) ;
  }
  stroke(0,0,255) ;
  line(tx[0], ty[0], tx[1], ty[1]) ;
  line(tx[2], ty[2], tx[3], ty[3]) ;
  // Zone à cocher
  stroke(0,0,0);
  fill(0,0,0,10) ;
  rect(Xmax*0.95,0,Xmax*0.05-1,Ymax*0.05) ;
  if (rempl>0) {
    fill(0,0,0) ;
    line(Xmax*0.95,0,Xmax-1,Ymax*0.05) ; 
    line(Xmax-1,0,Xmax*0.95,Ymax*0.05) ; 
  }
}

function dist2(x,y,xx,yy) {
  return (x-xx)*(x-xx)+(y-yy)*(y-yy) ;
}

function mousePressed(){
  var i,xx,yy;
  xx = mouseX; yy = mouseY ;
  // Sélection point ?
  for (i=0 ; i<4 ; i++) {
    if (dist2(tx[i],ty[i],xx,yy)<r*r) {
      sel = i ;
      break ;
    }
  }
  // Clic dans la zone à cocher ?
  if (xx>Xmax*0.95 && xx<Xmax && yy<Ymax*0.05 && yy<Ymax) {
    rempl = 10-rempl ;
  }
}

function mouseReleased(){
  sel = -1 ;
}