String[] lignes;
String texte;
String[] mots;
int compt;
int index;
void setup(){
  size(200,100);
  textSize(20);
  compt=0;
  index=0;
  lignes=loadStrings("./asset/hugo.txt");
  texte=join(lignes," ");
  mots=splitTokens(texte," ;,!?.");
  textAlign(CENTER);
  textSize(20);
  fill(255);
}
void draw(){
  background(0);
  if (compt==15){
    compt=0;
    index=index+1;
    if (index==mots.length){
      index=0;
    }
  }
  compt=compt+1;
  text(mots[index],100,50);
}

  