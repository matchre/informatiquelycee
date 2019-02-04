var tabSpan=[];
var texte;
var mots;
function setup() {
  texte="Aux âmes bien nées, La valeur n’attend point le nombre des années.";
  createP(texte);
  mots = texte.split(' ');
  for (var j=0; j<mots.length; j++) {
    var obj={span:createSpan(mots[j]),coordX:random(600),coordY:random(200)}
    tabSpan.push(obj);
  }
}
function draw() {
  for (i=0;i<tabSpan.length;i++){
    tabSpan[i].coordX=tabSpan[i].coordX+random(-2,2);
    tabSpan[i].coordY=tabSpan[i].coordY+random(-2,2);
    tabSpan[i].span.position(tabSpan[i].coordX,tabSpan[i].coordY);
  }
}
