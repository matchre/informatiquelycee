var img;
var img1;
function preload() {
	img=loadImage("tux.jpg");
}
function setup() {
    createCanvas(208,242);
    background(0);
}
function draw(){
	background(0);
	if (mouseX>0 && mouseX<208 && mouseY>0 && mouseY<242){
		img1=img.get(mouseX-35,mouseY-35,70,70);
		image(img1,mouseX-35,mouseY-35);
	}
	
}


