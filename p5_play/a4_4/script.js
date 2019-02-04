var img_1;
var img_2;
var smiley_sprite;
var group_smiley;
var score=0;
function preload() {
	img_1=loadImage("smiley.png")
	img_2=loadImage("smiley_blood.png")
}

function setup() {
	createCanvas(800,300);
	textSize(32);
	smiley_sprite=createSprite(random(20,780),random(20,280));
	smiley_sprite.addImage(img_1);
	smiley_sprite.setVelocity(random(-5,5),random(-5,5));
	group_smiley=new Group();
	for (i=0;i<10;i=i+1){
		var smiley_sprite_blood;
		smiley_sprite_blood=createSprite(random(20,780),random(20,280));
		smiley_sprite_blood.addImage(img_2);
		smiley_sprite_blood.setVelocity(random(-5,5),random(-5,5));
		group_smiley.add(smiley_sprite_blood);
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
	smiley_sprite.bounce(wall_g);
	smiley_sprite.bounce(wall_d);
	smiley_sprite.bounce(wall_b);
	smiley_sprite.bounce(wall_h);
	group_smiley.bounce(group_smiley);
	smiley_sprite.bounce(group_smiley,augmenteScore);
	text("Score : "+score,10,50)
	drawSprites();
}
function augmenteScore(){
	score=score+1;
}
