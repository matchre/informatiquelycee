var tabMots;
var chaineMots="";
var objNgramme={};
var debut=[]
var bouton;
var ordre=3;
var nbreLettreMax=10;
function preload(){
  tabMots=loadStrings("liste_mot.txt");
}
function setup(){
  noCanvas;
  bouton=createButton("Cliquez ici");
  bouton.mousePressed(creationMot);
  for (i=0;i<tabMots.length;i++){
    var lettres=tabMots[i].substring(0,ordre);
    if (lettres.length==ordre){
      debut.push(lettres);
    }

  }
  for (i=0; i<tabMots.length;i++){
    chaineMots=chaineMots+tabMots[i]+" ";
  }
  for (i=0;i<chaineMots.length;i++){
    var ngramme=chaineMots.substring(i,i+ordre)
    if (!objNgramme[ngramme]){
      objNgramme[ngramme]=[]
      objNgramme[ngramme].push(chaineMots.charAt(i+ordre));
    }
    else {
      objNgramme[ngramme].push(chaineMots.charAt(i+ordre));
    }
  }
}
function draw(){}
function creationMot(){
  var ngrammCourant=random(debut);
  var resultat=ngrammCourant
  for (i=0;i<nbreLettreMax;i++){
    var possible=objNgramme[ngrammCourant];
    var prochain=random(possible);
    if (prochain==" "){
      break;
    }
    resultat=resultat+prochain;
    ngrammCourant=resultat.substring(resultat.length-ordre,resultat.length);
  }

  createP(resultat)
}
