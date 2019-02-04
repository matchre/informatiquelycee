var compt=0;
var over=false;
var transTexte=false;
var chronoTransTexte=0;
tabTexte=["Dis-moi donc, je te prie, une seconde fois","Ce qui te fait juger qu’il approuve mon choix :","Apprends-moi de nouveau quel espoir j’en dois prendre ;","Un si charmant discours ne se peut trop entendre ;","Tu ne peux trop promettre aux feux de notre amour","La douce liberté de se montrer au jour.","Que t’a-t-il répondu sur la secrète brigue","Que font auprès de toi don Sanche et don Rodrigue ?","N’as-tu point trop fait voir quelle inégalité","Entre ces deux amants me penche d’un côté ?"]
tabEllipse=[];
function setup(){
  can=createCanvas(470,250);
  can.position(0,0);
  noStroke();
  texte=createP(tabTexte[0]).style("color","white");
  texte.mouseOver(changeText);
  texte.mouseOut(function(){over=false});
  texte.position(10,100);
}
function draw(){
    background(0);
    affichageTexte();
    affichageEllipse();
}
function changeText(){
  if (over==false){
    transTexte=true;
    compt=compt+1;
    if (compt>=tabTexte.length){
      compt=0;
    }
    over=true;
  }
}
function affichageTexte(){
  if (transTexte==false){
    texte.html(tabTexte[compt])
  }
  else {
    var transTex="";
    for (i=0;i<tabTexte[compt].length;i++){
      transTex=transTex+tabTexte[compt].charAt(random(tabTexte[compt].length));
    }
    texte.html(transTex);
    chronoTransTexte=chronoTransTexte+1;
  }
  if (chronoTransTexte>10){
    transTexte=false;
    chronoTransTexte=0;
  }
}
function mousePressed(){
  son = new p5.Oscillator();
  son.setType('sine');
  son.freq(random(100*(compt+1),150*(compt+1)));
  son.amp(1,0.1);
  son.amp(0,1.5,0.1);
  son.start();
  obj={x:mouseX,y:mouseY,trans:255,r:random(255),v:random(255),b:random(255)};
  tabEllipse.push(obj);
}
function affichageEllipse(){
  if (tabEllipse.length>10){
    tabEllipse.splice(0,5)
  }
  for(i=0;i<tabEllipse.length;i++){
    fill(tabEllipse[i].r,tabEllipse[i].v,tabEllipse[i].b,tabEllipse[i].trans)
    ellipse(tabEllipse[i].x,tabEllipse[i].y,50,50);
    tabEllipse[i].trans=tabEllipse[i].trans-5
  }
}
