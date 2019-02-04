var tabTxt;
var compt=0;
var i=0;
function preload() {
	tabTxt=loadStrings("hugo.txt");
}
function setup() {
	createCanvas(300,50);
	fill(255);
}
function draw() {
	background(0);
	text(tabTxt[i],20,30);
	if (compt==70){
		i=i+1;
		compt=0;
	}
	if (i==tabTxt.length){
		i=0;
	}
	compt=compt+1;
}
