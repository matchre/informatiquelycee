var img;
function preload() {
	img=loadImage("tux.jpg");
}

function setup() {
    createCanvas(420,242);
}

function draw() {
	background(240,240,240);
	tint(0,255,0);
	image (img,0,0);
	noTint();
	image (img,212,0);
}
