var tabLettres=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","é","è"];
var nbLettre=6;
function setup(){
  noCanvas;
  var bouton=createButton("Créer un mot");
  bouton.mousePressed(creationMot)

}
function draw(){}
function creationMot(){
  var chaine="";
  for (i=0;i<nbLettre;i++){
    chaine=chaine+random(tabLettres);
  }
  createP(chaine);
}
