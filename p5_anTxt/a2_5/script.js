var tabTxt;
var texte;
var mots;
var tabOcc=[];
var tabDJ=[];
function preload() {
	tabTxt=loadStrings("hugo.txt");
}
function setup() {
	createCanvas(300,7800);
	background(0);
	fill(255);
	texte=join(tabTxt," ");
	mots=splitTokens(texte," ;,!?.");
	for (i=0;i<mots.length;i++){
		var deja_v=false;
		for (j=0;j<tabDJ.length;j++){
			if (mots[i].toLowerCase()==tabDJ[j]){
				deja_v=true;
				tabOcc[j]=tabOcc[j]+1;	
			}
		}
		if (deja_v==false){
			tabOcc.push(1);
			tabDJ.push(mots[i].toLowerCase());
		}	
	}
	
	for (i=0;i<tabDJ.length;i++){
		text("mot : '"+tabDJ[i]+"' ; nombre occurence : "+tabOcc[i], 10,20+20*i);
	}
}
function draw() {

}
