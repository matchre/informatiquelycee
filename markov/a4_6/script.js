var tabMots;
var chaineMots="";
var objNgramme={};
var bouton;
var ordre=2;
function preload(){
  tabMots=loadStrings("liste_mot.txt");
}
function setup(){
  noCanvas;
  bouton=createButton("Cliquez ici")
  bouton.mousePressed(creationMot)
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
  var ngrammCourant="da";
  var resultat=ngrammCourant
  for (i=0;i<10;i++){
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
