var compt=0;
var over=false;
var transTexte=false;
var chronoTransTexte=0;
var play=false;
tabTexte=["Dis-moi donc, je te prie, une seconde fois","Ce qui te fait juger qu’il approuve mon choix :","Apprends-moi de nouveau quel espoir j’en dois prendre ;","Un si charmant discours ne se peut trop entendre ;","Tu ne peux trop promettre aux feux de notre amour","La douce liberté de se montrer au jour.","Que t’a-t-il répondu sur la secrète brigue","Que font auprès de toi don Sanche et don Rodrigue ?","N’as-tu point trop fait voir quelle inégalité","Entre ces deux amants me penche d’un côté ?"];
var img;
function preload() {
	img=loadImage("man.jpg");
	son_foule=loadSound("foule.ogg");
  piano=loadSound("piano.ogg");
}
function setup(){
  can=createCanvas(640,550);
  can.position(0,0);
  noStroke();
  texte=createP(tabTexte[0]).style("color","white");
  texte.mouseOver(changeText);
  texte.mouseOut(function(){over=false});
  texte.position(100,480);
  image(img,0,0);
  loadPixels();
  background(0);
}
function draw(){
	if (play){
		affichageTexte();
	  for (i=0;i<100;i++){
	    affichePixels();
	  }
	}

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
function affichePixels(){
    var x=floor(random(0,640));
    var y=floor(random(0,462));
    var i=(x+y*640)*4;
    var ro=pixels[i];
    var ve=pixels[i+1];
    var bl=pixels[i+2];
    stroke(ro,ve,bl);
    point(x,y);
}
function mousePressed() {
	if (play==true){
		if (piano.isPlaying()==false){
	    son_foule.amp(0.2,2);
	    piano.play();
	    piano.amp(1,2)
	  }
	  else{
	    piano.amp(0,2)
	    piano.stop(3);
	    son_foule.amp(1,2);

	    piano.stop();
	    console.log(piano.isPlaying());
	  }
	}
	else {
		play=true;
		son_foule.play();
		son_foule.loop();
	}
}
