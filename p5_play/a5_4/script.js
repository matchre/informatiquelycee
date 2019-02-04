var img;
var smiley_sprite;
var sol;
var isJump=false;
function preload() {
	img=loadImage("smiley.png");
}
function setup() {
	createCanvas(800,300);
	smiley_sprite=createSprite(400,280);
	smiley_sprite.addImage(img);
	sol=createSprite(400,305,800,10);
	sol.immovable=true;
}
function draw() {
	background(240,240,240);
	smiley_sprite.addSpeed(0.2, 90);
	smiley_sprite.bounce(sol,frottement);
	console.log(isJump)
	drawSprites();
}
function frottement(){
	smiley_sprite.velocity.y=0;
	isJump=false;
}
function keyPressed(){
	if (keyCode==13){
	   	if (!isJump){
   			smiley_sprite.addSpeed(7,270);
   			isJump=true;
   		}
	}
}
