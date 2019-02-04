Mobile=function (x,y,masse,ray,ro,ve,bl) {
  this.OM = new createVector(x,y);
  this.dOM = new createVector();
  this.v = new createVector();
  this.dv = new createVector();
  this.a = new createVector();
  this.sommeF = new createVector();
  this.m=masse;
  this.r=ray;
  this.rouge=ro;
  this.vert=ve;
  this.bleu=bl;
  this.affiche=function(){
    fill(this.rouge,this.vert,this.bleu);
    ellipse(this.OM.x,this.OM.y,2*this.r,2*this.r);  
  }
  this.update=function(dt){
    this.a=p5.Vector.mult(this.sommeF,1/this.m);
    this.dv = p5.Vector.mult(this.a,dt);
    this.v.add(this.dv);
    this.dOM = p5.Vector.mult(this.v,dt);
    this.OM.add(this.dOM);
    this.sommeF.mult(0);
  }
  this.ajoutForce=function(F){
    this.sommeF.add(F);
  }
  this.setVit=function(vit){
    this.v.x=vit.x;
    this.v.y=vit.y;	
  }
}
