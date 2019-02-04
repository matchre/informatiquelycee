var tabMots;
var chaineMots="";
var motAlea="";
var objLettres={};
var nbLettre=8;
function preload(){
	tabMots=loadStrings("liste_mot.txt");
}
function setup(){
	noCanvas;
	var bouton=createButton("Créer un mot");
  bouton.mousePressed(creationMot)
	for (i=0; i<tabMots.length;i++){
		chaineMots=chaineMots+tabMots[i]+" ";
	}
	for (i=0;i<chaineMots.length;i++){
		lettre=chaineMots.charAt(i)
		if (!objLettres[lettre]){
			objLettres[lettre]=[]
			objLettres[lettre].push(chaineMots.charAt(i+1));
		}
		else {
			objLettres[lettre].push(chaineMots.charAt(i+1));
		}
	}
}
function draw(){}
function creationMot(){
	motAlea="";
	motAlea=motAlea+random(objLettres[" "]);
	for (i=1;i<nbLettre;i++){
		var prev=motAlea.charAt(i-1);
		next=random(objLettres[prev]);
		while (next==" "){
			next=random(objLettres[prev]);
		}
		motAlea=motAlea+next;
	}
	createP(motAlea);
}
