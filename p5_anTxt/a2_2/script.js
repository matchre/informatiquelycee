var tabTxt;
var texte;
var longStr;
var x;
function preload() {
	tabTxt=loadStrings("hugo.txt");
}
function setup() {
	createCanvas(400,50);
	background(0);
	fill(255);
	textAlign(RIGHT);
	texte=join(tabTxt," ");
	longStr=textWidth(texte);
	x=longStr+410;
}
function draw() {
	background(0);
  	text(texte,x,25);
  	x=x-1;
  	if (x<=0){
    		x=longStr+410;
  	}
}



