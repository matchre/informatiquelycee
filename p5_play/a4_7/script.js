var img_1;
var img_2;
var smiley_sprite;
var group_smiley;
var score=0;
var time=0;
var g=false;
var d=false;
var h=false;
var b=false;
var vit=5;
function preload() {
	img_1=loadImage("smiley.png")
	img_2=loadImage("smiley_blood.png")
}

function setup() {
	createCanvas(800,300);
	textSize(32);
	smiley_sprite=createSprite(random(20,780),random(20,280));
	smiley_sprite.addImage(img_1);
	group_smiley=new Group();
	for (i=0;i<15;i=i+1){
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
	time=round(millis()/1000)
	if (time<8){
		group_smiley.bounce(wall_g);
		group_smiley.bounce(wall_d);
		group_smiley.bounce(wall_b);
		group_smiley.bounce(wall_h);
		smiley_sprite.bounce(wall_g);
		smiley_sprite.bounce(wall_d);
		smiley_sprite.bounce(wall_b);
		smiley_sprite.bounce(wall_h);
		group_smiley.bounce(group_smiley);
		smiley_sprite.overlap(group_smiley,contact);
		mouvement();
		text("Score : "+score,10,50)
		text("Temps : "+time,10,80)
		drawSprites();
	}
	else {
		textAlign(CENTER);
		text("Jeu terminé, votre score : "+score,400,150)
		text("Appuyez sur F5 pour relancer le jeu",400,200) 
	}

}
function contact(sprite_1,sprite_2){
	sprite_2.remove();
	score=score+1;
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
		smiley_sprite.position.x=smiley_sprite.position.x-vit	
	}
	if (d==true){
		smiley_sprite.position.x=smiley_sprite.position.x+vit	
	}
	if (h==true){
		smiley_sprite.position.y=smiley_sprite.position.y-vit	
	}
	if (b==true){
		smiley_sprite.position.y=smiley_sprite.position.y+vit	
	}
}
