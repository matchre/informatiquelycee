var img;
var group_smiley;
function preload() {
	img=loadImage("smiley.png")
}

function setup() {
	createCanvas(800,300);
	group_smiley=new Group();
	for (i=0;i<20;i=i+1){
		var smiley_sprite;
		smiley_sprite=createSprite(random(20,780),random(20,280));
		smiley_sprite.addImage(img);
		smiley_sprite.setVelocity(random(-5,5),random(-5,5));
		group_smiley.add(smiley_sprite);
	}
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
	group_smiley.bounce(wall_g);
	group_smiley.bounce(wall_d);
	group_smiley.bounce(wall_b);
	group_smiley.bounce(wall_h);
	group_smiley.bounce(group_smiley);
	drawSprites();
}
