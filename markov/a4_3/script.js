var tabMots;
var chaineMots="";
var objNgramme={};
function preload(){
	tabMots=loadStrings("liste_mot.txt");
}
function setup(){
	noCanvas;
	var bouton=createButton("Cliquez ici")
	bouton.mousePressed(creationMot)
	for (i=0; i<tabMots.length;i++){
		chaineMots=chaineMots+tabMots[i]+" ";
	}
	for (i=0;i<chaineMots.length;i++){
		var ngramme=chaineMots.substring(i,i+3)
		if (!objNgramme[ngramme]){
			objNgramme[ngramme]=[]
			objNgramme[ngramme].push(chaineMots.charAt(i+3));
		}
		else {
			objNgramme[ngramme].push(chaineMots.charAt(i+3));
		}
	}
}
function draw(){}
function creationMot(){
	var ngrammCourant="aba";
	var possible=objNgramme[ngrammCourant];
	var prochain=random(possible)
	var resultat=ngrammCourant+prochain;
	createP(resultat)
}
