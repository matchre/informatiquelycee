var img;
function preload() {
	img=loadImage("tux.jpg");
}
function setup() {
    createCanvas(208,242);
    noStroke();
    image(img,0,0);
    loadPixels();
    console.log(pixels)
    background(0);
}
function draw(){
	var x=floor(random(208));
	var y=floor(random(242));
  	var i=(x+y*208)*4;
  	var ro=pixels[i];
  	var ve=pixels[i+1];
  	var bl=pixels[i+2];
  	fill(ro,ve,bl,100);
  	rect(x,y,10,10);
}
