var perso;
var perso_walk;
function preload() {
	perso_sprite_sheet_walk = loadSpriteSheet('sonic_1.png', 48, 48, 6);
	perso_sprite_sheet_wait = loadSpriteSheet('sonic_2.png', 48, 48, 4);
}
function setup() {
	createCanvas(800,300);
	perso=createSprite(400,150);
	perso_walk=loadAnimation(perso_sprite_sheet_walk);
	perso_walk.frameDelay=6;
	perso_wait=loadAnimation(perso_sprite_sheet_wait);
	perso_wait.frameDelay=8;
	perso.addAnimation("walk",perso_walk);
	perso.addAnimation("wait",perso_wait);
	perso.changeAnimation("wait");
	
}
function draw() {
	background(240,240,240);
	drawSprites();
}
function keyPressed(){
   if (keyCode==37){
   	perso.mirrorX(-1);
   	perso.changeAnimation("walk");
   	perso.velocity.x=-2;
  }
  else if (keyCode==39){
  	perso.mirrorX(1);
  	perso.changeAnimation("walk");
  	perso.velocity.x=2;
  }
  else {
  	perso.changeAnimation("wait");
  	perso.velocity.x=0;
  }
  
}
function keyReleased(){
	perso.changeAnimation("wait");
	perso.velocity.x=0;
}
