var img;
var smiley_sprite_1;
var smiley_sprite_2;
function preload() {
	img=loadImage("smiley.png")
}

function setup() {
	createCanvas(800,300);
	smiley_sprite_1=createSprite(random(20,780),random(20,280));
	smiley_sprite_1.addImage(img);
	smiley_sprite_1.setVelocity(random(-5,5),random(-5,5));
	smiley_sprite_2=createSprite(random(20,780),random(20,280));
	smiley_sprite_2.addImage(img);
	smiley_sprite_2.setVelocity(random(-5,5),random(-5,5));
	wall_g=createSprite(-5,150,10,300);
	wall_d=createSprite(805,150,10,300);
	wall_h=createSprite(400,-5,800,10);
	wall_b=createSprite(400,305,800,10);
	wall_d.immovable=true;
    	wall_g.immovable=true;
    	wall_h.immovable=true;
    	wall_b.immovable=true;

}

function draw() {
	background(240,240,240);
	smiley_sprite_1.bounce(wall_g);
	smiley_sprite_1.bounce(wall_d);
	smiley_sprite_1.bounce(wall_b);
	smiley_sprite_1.bounce(wall_h);
	smiley_sprite_2.bounce(wall_g);
	smiley_sprite_2.bounce(wall_d);
	smiley_sprite_2.bounce(wall_b);
	smiley_sprite_2.bounce(wall_h);
	drawSprites();
}
