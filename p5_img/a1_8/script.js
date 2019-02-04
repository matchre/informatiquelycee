var img;
function preload() {
	img=loadImage("tux.jpg");
}
function setup() {
    createCanvas(420,242);
}
function draw(){
  image (img,0,0);
  filter(INVERT);
  image (img,209,0);
}
