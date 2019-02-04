var tabTxt;
var texte;
var mots;
var compt=0;
var i=0;
function preload() {
	tabTxt=loadStrings("hugo.txt");
}
function setup() {
	createCanvas(200,50);
	background(0);
	fill(255);
	textAlign(CENTER);
	texte=join(tabTxt," ");
	mots=splitTokens(texte," ;,!?.");
}
function draw() {
	background(0);
  	if (compt==15){
    	compt=0;
    	i=i+1;
    		if (i==mots.length){
      			i=0;
    		}
  	}
  compt=compt+1;
  text(mots[i],100,25);
}
