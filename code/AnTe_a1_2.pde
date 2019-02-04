String[] lignes;
int i=0;
int compt=-1;
void setup(){
  size(400,100);
  fill(255);
  textAlign(CENTER);
  lignes=loadStrings("./asset/hugo.txt");
}
void draw(){
  background(0);
  if (lignes[i].substring(0).equals("")){
    i=i+1;
  }
  if (compt==100){
    compt=0;
    i=i+1;
    if (i==lignes.length){
      i=0;
    }
  }
  compt=compt+1;
  text(lignes[i],200,50);
}
  