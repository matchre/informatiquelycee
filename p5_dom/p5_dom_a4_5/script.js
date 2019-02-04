var x=5;
var v=2;
function setup(){
    para1=createP("Voici un premier paragraphe");
    para2=createP("Voici un deuxième paragraphe");
    para3=createP("Voici un troisième paragraphe");
    para4=createP("Voici un quatrième paragraphe");
    can=createCanvas(200,200);
    fill(255,0,0);
    can.position(10,10);
}
function draw(){
    clear();
    if (x<5 || x>195){
        v=-v;
    }
    x=x+v;
    ellipse(x,100,10,10);
}