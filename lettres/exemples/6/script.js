texte="Verba volant, scripta manent.";
tabCara=[];
var clic=false;
function setup(){
  can=createCanvas(800,600);
  fill(255);
  textSize(40);
	var x=100;
	for (var i=0;i<texte.length;i++){
		obj={x_home:x,y_home:height/2,posX:x,posY:height/2,vitX:random(-2,2),vitY:random(-2,2),cara:texte.charAt(i)};
		tabCara.push(obj);
		x=x+textWidth(texte.charAt(i));
	}

}
function draw(){
  background(0);
  for (var i=0;i<tabCara.length;i++){
      if (clic){
        tabCara[i].posX=tabCara[i].posX+tabCara[i].vitX;
        tabCara[i].posY=tabCara[i].posY+tabCara[i].vitY;
      }
      else{
        if (abs(tabCara[i].posX-tabCara[i].x_home)>2){
          tabCara[i].posX=tabCara[i].posX-tabCara[i].vitX;
        }
        else{
          tabCara[i].posX=tabCara[i].x_home
        }
        if (abs(tabCara[i].posY-tabCara[i].y_home)>2){
          tabCara[i].posY=tabCara[i].posY-tabCara[i].vitY;
        }
        else{
          tabCara[i].posY=tabCara[i].y_home
        }
      }
      text(tabCara[i].cara,tabCara[i].posX,tabCara[i].posY)
  }
}
function mousePressed() {
  if (clic==false){
    clic=true;
  }
  else{
    clic=false;
  }

}
