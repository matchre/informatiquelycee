var tabMots;
var chaineMots="";
var objLettres={};
function preload(){
	tabMots=loadStrings("liste_mot.txt");
}
function setup(){
	noCanvas;
	for (i=0; i<tabMots.length;i++){
		chaineMots=chaineMots+tabMots[i]+" ";
	}
	for (i=0;i<chaineMots.length;i++){
		lettre=chaineMots.charAt(i)
		if (!objLettres[lettre]){
			objLettres[lettre]=[];
			objLettres[lettre].push(chaineMots.charAt(i+1));
		}
		else {
			objLettres[lettre].push(chaineMots.charAt(i+1));
		}
	}
	createP ('La lettre "a" est suivi par les lettres : '+objLettres["a"]);
}
