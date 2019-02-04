var compt=0;
var over=false;
var transTexte=false;
var chronoTransTexte=0;
var translEll=false;
var comptTranslation=0;
tabTexte=["Dis-moi donc, je te prie, une seconde fois","Ce qui te fait juger qu’il approuve mon choix :","Apprends-moi de nouveau quel espoir j’en dois prendre ;","Un si charmant discours ne se peut trop entendre ;","Tu ne peux trop promettre aux feux de notre amour","La douce liberté de se montrer au jour.","Que t’a-t-il répondu sur la secrète brigue","Que font auprès de toi don Sanche et don Rodrigue ?","N’as-tu point trop fait voir quelle inégalité","Entre ces deux amants me penche d’un côté ?"]
tabObj=[];
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
    affichageObj();
    if (translEll){
      translation();
    }
}
function changeText(){
  if (over==false){
    transTexte=true;
    compt=compt+1;
    if (random(0,100)>60){
      translEll=true;
    }
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
  var tir=random(-100,100);
  if (tir>0){
    obj={x:mouseX,y:mouseY,type:"rect",c:random(20,50),r:random(255),v:random(255),b:random(255)};
  }
  else{
    obj={x:mouseX,y:mouseY,type:"ellipse",ray:random(20,50),r:random(255),v:random(255),b:random(255)};
  }
  tabObj.push(obj);
}
function affichageObj(){
  if (tabObj.length>10){
    tabObj.splice(0,1)
  }
  for(i=0;i<tabObj.length;i++){
    fill(tabObj[i].r,tabObj[i].v,tabObj[i].b);
    if (tabObj[i].type=="ellipse"){
      ellipse(tabObj[i].x,tabObj[i].y,tabObj[i].ray,tabObj[i].ray);
    }
    else{
      rect(tabObj[i].x,tabObj[i].y,tabObj[i].c,tabObj[i].c);
    }

  }
}
function translation(){
  comptTranslation=comptTranslation+1;
  for (i=0;i<tabObj.length;i++){
    tabObj[i].x=tabObj[i].x-20;
  }
  if (comptTranslation>50){
    tabObj=[];
    translEll=false;
    comptTranslation=0;
  }
}
