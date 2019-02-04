var pause=true;
function preload(){
  img=loadImage("einstein.jpg");
	son=loadSound("einstein.ogg");
}
function setup(){
  can=createCanvas(650,500);
  fill(255);
  background(0)
  push();
  translate(100,200);
  rotate(radians(30));
  image(img,0,0);
  pop();
  push();
  translate(400,100);
  rotate(radians(-20));
  textAlign(CENTER);
  textSize(50);
  text("E = mc",0,0);
  textSize(25);
  text("2",95,-40);
  pop();
}
function draw(){
}
function keyPressed() {
  if (keyCode==80){
    if (pause==true){
      pause=false;
      son.play();
    }
    else {
      pause=true;
      son.pause();
    }
  }
  else {
    pause=true;
    son.stop();
  }
}
