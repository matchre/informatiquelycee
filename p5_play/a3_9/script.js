var img_smiley;
var img_wall;
var smiley_sprite;
var wall_sprite_g;
var wall_sprite_d;
var compteur=0;
function preload() {
	img_smiley=loadImage("smiley.png");
	img_wall=loadImage("wall.png");
}

function setup() {
    createCanvas(800,345);
    smiley_sprite=createSprite(100,172);
    smiley_sprite.addImage(img_smiley);
    smiley_sprite.setVelocity(3,0);
    wall_sprite_g=createSprite(50,172);
    wall_sprite_g.addImage(img_wall);
    wall_sprite_d=createSprite(750,172);
    wall_sprite_d.addImage(img_wall);
    wall_sprite_d.immovable=true;
    wall_sprite_g.immovable=true;
}

function draw() {
	background(240,240,240);
	if (wall_sprite_d.removed==false){
		smiley_sprite.bounce(wall_sprite_d,contact_wall_d);
	}
	
	smiley_sprite.bounce(wall_sprite_g);
	drawSprites();
}
function contact_wall_d(){
	compteur=compteur+1;
	if (compteur==3){
			wall_sprite_d.remove();
	}
}