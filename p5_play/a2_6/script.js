var img;
var smiley_sprite;
function preload() {
	img=loadImage("smiley.png")
}

function setup() {
    createCanvas(800,300);
    smiley_sprite=createSprite(0,300);
    smiley_sprite.addImage(img);
    smiley_sprite.setVelocity(3,-1);
}

function draw() {
	background(240,240,240);
	drawSprites();
}