texte="L’imagination est plus importante que le savoir.";
tabCara=[];
var stop=true;
function setup(){
  can=createCanvas(650,200);
  fill(255);
	var x=50;
  background(0)
	for (var i=0;i<texte.length;i++){
    vit=random(-0.1,0.1);
    while (abs(vit)<0.01){
      vit=random(-0.1,0.1);
    }
		obj={posX:x,posY:height/2,theta:0,vitRot:vit,cara:texte.charAt(i)};
		tabCara.push(obj);
		x=x+textWidth(texte.charAt(i))+5;
	}
}
function draw(){
  background(0);
  textSize(20);
  for (var i=0;i<texte.length;i++){
    if (stop && abs(tabCara[i].theta%TWO_PI)<0.2){
      tabCara[i].theta=0;
    }
    else {
      tabCara[i].theta=tabCara[i].theta+tabCara[i].vitRot
    }
		rotation(tabCara[i].posX,tabCara[i].posY,tabCara[i].theta,tabCara[i].cara);
	}
  textSize(12);
  text("Albert Einstein",550,150);
}
function rotation(x,y,theta,lettre) {
  textAlign(CENTER);
  push();
  translate(x,y);
  rotate(theta);
  text(lettre,0,0);
  pop();
}
function mousePressed() {
  if (stop){
    stop=false;
  }
  else {
    stop=true;
  }
}
