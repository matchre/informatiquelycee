var tabMots;
var mots="";
function preload(){
  tabMots=loadStrings("liste_mot.txt");
}
function setup(){
  noCanvas;
  for (i=0; i<tabMots.length;i++){
    mots=mots+tabMots[i]+" ";
  }
  createP(mots);
}
