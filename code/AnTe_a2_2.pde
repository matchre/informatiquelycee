String[] lignes;
String texte;
//int x=24680;
int x;
int longStr;
void setup(){
  size(400,100);
  textSize(20);
  lignes=loadStrings("./asset/hugo.txt");
  texte=join(lignes," ");
  longStr=int(textWidth(texte));
  x=longStr+410;
  textAlign(RIGHT);
  textSize(20);
  fill(255);
}
void draw(){
  background(0);
  text(texte,x,50);
  x=x-1;
  if (x<=0){
    x=longStr+410;
  }
}

  