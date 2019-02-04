texte="Verba volant, scripta manent.";
tabCara=[];
var compt=0;
function setup(){
  can=createCanvas(350,250);
  fill(255);
  textSize(20);
	var x=20;
	for (i=0;i<texte.length;i++){
		obj={x_home:x,y_home:30,posX:x,posY:30,vit:random(1,2),cara:texte.charAt(i),dep:true};
		tabCara.push(obj);
		x=x+textWidth(texte.charAt(i));
	}
}
function draw(){
  background(0);
  for (i=0;i<tabCara.length;i++){
    text(tabCara[i].cara,tabCara[i].posX,tabCara[i].posY);
    if (tabCara[i].dep==true){
      tabCara[i].posY=tabCara[i].posY+tabCara[i].vit;
    }
    if (tabCara[i].posY>221){
      tabCara[i].dep=false;
      tabCara[i].posY=220;
      tabCara[i].vit=-tabCara[i].vit
      compt=compt+1;
    }
    if (tabCara[i].posY<30){
      tabCara[i].dep=false;
      tabCara[i].posY=30;
      tabCara[i].vit=-tabCara[i].vit
      compt=compt+1;
    }
    if (compt==tabCara.length){
      compt=0;
      for (j=0;j<tabCara.length;j++){
        tabCara[j].dep=true
      }
    }
  }
}
