var tabTxt;
var texte;
var mots;
var tabOcc=[];
var tabMots=[];
var maxOcc=0;
var pos=0;
function preload() {
	tabTxt=loadStrings("hugo.txt");
}
function setup() {
	createCanvas(750,550);
	background(0);
	fill(255);
	texte=join(tabTxt," ");
	mots=splitTokens(texte," ;,!?.");
	for (i=0;i<mots.length;i++){
		var deja_v=false;
		for (j=0;j<tabMots.length;j++){
			if (mots[i].toLowerCase()==tabMots[j]){
				deja_v=true;
				tabOcc[j]=tabOcc[j]+1;	
			}
		}
		if (deja_v==false){
			tabOcc.push(1);
			tabMots.push(mots[i].toLowerCase());
		}	
	}
	for (i=0;i<tabMots.length;i++){
		if (tabOcc[i]>maxOcc){
			maxOcc=tabOcc[i];
		}
	}
	
	for (i=0;i<tabMots.length;i++){
		if (tabOcc[i]>5){
			text (tabMots[i],20,50+30*pos)
			rect(70,35+30*pos,20*tabOcc[i],20);
			text (tabOcc[i],80+20*tabOcc[i],50+30*pos);
			pos=pos+1;
		}
	}
}
function draw() {

}
