var maVideo;
function setup() {
	createCanvas(800,300);
	maVideo=createVideo("fingers.webm");
	maVideo.loop();
	maVideo.hide();
}

function draw() {
	background(255);
	image(maVideo,400,30);
	filter(POSTERIZE,3);
	image(maVideo,30,30);	
}
