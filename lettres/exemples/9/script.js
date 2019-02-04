var maVideo;
function preload(){
  img=loadImage("photo.jpg");
}
function setup() {
	createCanvas(800,600);
	maVideo=createVideo("vid.webm");
	maVideo.loop();
	maVideo.hide();
}
function draw() {
	background(0);
  push();
  translate(200,150);
  rotate(radians(-30));
  image(maVideo,0,0,400,230);
  pop();
  push();
  translate(100,300);
  rotate(radians(20));
  image(img,0,0,400,230);
  pop();
}
