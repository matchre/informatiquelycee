var maVideo;
var largeur=320;
var hauteur=240;
var index=0;
var step=8
function setup() {
	createCanvas(largeur,hauteur);
	maVideo=createVideo("fingers.webm");
	maVideo.hide();
	maVideo.loop();
	noStroke();
	fill(0);
}

function draw() {
	background(255);
	maVideo.loadPixels();
	for (y=0;y<hauteur;y=y+step){
    		for (x=0;x<largeur;x=x+step){
    			index=4*(x+y*largeur)
    			var r=maVideo.pixels[index];
    			var v=maVideo.pixels[index+1];
    			var b=maVideo.pixels[index+2];
    			var gris=floor((r+v+b)/3);
    			var dark=(255-gris)/255
    			var ray=dark*step;
    			ellipse(x,y,ray,ray)			
    		}
    	}
}
