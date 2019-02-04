var img;
var smiley_sprite_1;
var smiley_sprite_2;
var cont=false;
function preload() {
	img=loadImage("smiley.png");
}

function setup() {
    createCanvas(800,300);
    smiley_sprite_1=createSprite(100,150);
    smiley_sprite_1.addImage(img);
    smiley_sprite_1.setVelocity(3,0);
    smiley_sprite_1.mass=1;
    smiley_sprite_2=createSprite(600,150);
    smiley_sprite_2.addImage(img);
    smiley_sprite_2.immovable=true;
    
    
}

function draw() {
	background(240,240,240);
	smiley_sprite_1.bounce(smiley_sprite_2,contact);
	drawSprites();
}
function contact(){
	smiley_sprite_2.remove();
	
}