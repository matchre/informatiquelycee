void nouveauCarre(){
 int r,v,b,t;
 r=int(random(255));
 v=int(random(255));
 b=int(random(255));
 t=int(100+random(100));
 fill(r,v,b,t);
 rect(mouseX-10,mouseY-10, 20,20); 
}
void setup(){
  background(255);
  size(200,200);
  noStroke();
}
void draw(){}
void mousePressed(){
  nouveauCarre();
}

