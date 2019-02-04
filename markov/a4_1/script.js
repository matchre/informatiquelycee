var tabMots;
var chaineMots="";
var objNgramme={};
var nbLettre=8
function preload(){
  tabMots=loadStrings("liste_mot.txt");
}
function setup(){
  noCanvas;
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
  createP ('Le 3-gramme "aba" est suivi par les lettres suivantes :');
  createP(objNgramme["aba"])
  createP ('Le 3-gramme " di" est suivi par les lettres suivantes :');
  createP(objNgramme[" di"])
}
