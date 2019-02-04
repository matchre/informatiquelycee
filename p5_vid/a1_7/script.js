var maVideo;
function setup() {
	createCanvas(300,220);
	maVideo=createVideo("fingers.webm");
	maVideo.loop();
	maVideo.hide();
}

function draw() {
	background(255);
	image(maVideo);
	loadPixels();
	for (i=0;i<pixels.length;i=i+4){
    		if (pixels[i]<50 && pixels[i+1]<50 && pixels[i+2]<50){
    			pixels[i]=255;
    		}
	
    	}
    	updatePixels();
}
