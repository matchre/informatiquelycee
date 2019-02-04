var tabMots;
var chaineMots="";
var tabLettres=[];
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
    tabLettres.push(lettre);
  }
  createP(tabLettres);
}
