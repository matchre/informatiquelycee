var img;
function preload() {
	img=loadImage("tux.jpg");
}
function setup() {
    createCanvas(208,242);
    image(img, 0, 0);
    loadPixels();
    for (i=0;i<pixels.length;i=i+4){
    	var ro=pixels[i];
    	var ve=pixels[i+1];
    	var bl=pixels[i+1];
    	var gris=floor(ro+ve+bl)/3
    	pixels[i]=gris;
    	pixels[i+1]=gris;
    	pixels[i+2]=gris;
    }
    updatePixels();
}
function draw(){
}

