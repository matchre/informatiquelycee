int posX;
float angle_dep;
float angle_arr;
int d;
int dep;
void pacMan(int s){
  if (s>0){
    d=8;
    angle_dep=radians(30);
    angle_arr=radians(330);  
  }
  else{
    d=-8;
    angle_dep=radians(-150);
    angle_arr=radians(150); 
  }
  fill(255,230,0);
  arc(posX,50,40,40,angle_dep,angle_arr);
  fill(0);
  ellipse(posX+d,33,5,5);
}
void setup(){
  size(400,100);
  background(255);
  noStroke();
  posX=20;
  dep=2;
}
void draw(){
  background(255);
  if (posX<20){
    dep=2;
  }
  if (posX>380){
    dep=-2;
  }
  posX=posX+dep;
  pacMan(dep);
}
