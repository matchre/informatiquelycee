function tete() {
  fill(0,255,0);
  ellipse (0,0,200,200);
  if (compt<10){
    fill(255,0,0);
    compt++;
  }
  else if (compt>10 && compt<20) {
    fill(0,0,255);
    compt++;
  }
  else {
    compt=0;
  }
  ellipse (-40,-50,20,30);
  ellipse (40,-50,20,30);
  line(0,-10,0,10);
  line(-10,0,10,0)
  line(-20,40,20,40);
  line(-20,50,20,50);
}
function setup() {
    theta=0.05;
    compt=0;
    createCanvas(300,300);
    translate (150,150);


}

function draw() {
  background(255)
  rotate(theta)
  tete();
}
