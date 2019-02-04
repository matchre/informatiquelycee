var img;
function preload() {
	img=loadImage("tux.jpg");
}
function setup() {
    createCanvas(208,242);
    image(img, 0, 0);
    loadPixels();
    for (i=0;i<pixels.length;i=i+4){
    	if (pixels[i]==0 && pixels[i+1]==0 && pixels[i+2]==0){
    		pixels[i]=255;
    	}
    }
    updatePixels();
}
function draw(){
}

