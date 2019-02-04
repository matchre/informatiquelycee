var img;
var smiley_sprite;
var g=false;
var d=false;
var h=false;
var b=false;
function preload() {
	img=loadImage("smiley.png")
}

function setup() {
    createCanvas(800,300);
    smiley_sprite=createSprite(400,150);
    smiley_sprite.addImage(img);
}

function draw() {
	background(240,240,240);
	mouvement();	
	drawSprites();
}

function keyPressed(){
   if (keyCode==37){
    g=true;
  }
  if (keyCode==39){
    d=true;;
  }
  if (keyCode==38){
    h=true;
  }
  if (keyCode==40){
    b=true;
  }
}
function keyReleased(){
   if (keyCode==37){
    g=false;
  }
  if (keyCode==39){
    d=false;
  }
  if (keyCode==38){
    h=false;
  }
  if (keyCode==40){
    b=false;
  }
}
function mouvement(){
	if (g==true){
		smiley_sprite.position.x=smiley_sprite.position.x-2	
	}
	if (d==true){
		smiley_sprite.position.x=smiley_sprite.position.x+2	
	}
	if (h==true){
		smiley_sprite.position.y=smiley_sprite.position.y-2	
	}
	if (b==true){
		smiley_sprite.position.y=smiley_sprite.position.y+2	
	}
}
