var inp;
var btn;
var liste;
function setup(){
    noCanvas();
    inp=select("input");
    btn=select("button");
    liste=select("ul");
    inp.value("");
    btn.mouseClicked(ajoutListe);
}
function draw(){
}
function ajoutListe(){
    var mot=inp.value();
    inp.value("");
    var eleList=createElement("li",mot);
    eleList.parent(liste);
}