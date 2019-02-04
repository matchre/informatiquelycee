SpriteAnim an1;
SpriteAnim an2;
class SpriteAnim {
  int index;
  int compt;
  int vit;
  int nbImg;
  PImage img;
  PImage tabImg[];
  SpriteAnim(String nomImg,int nbImage, int vitAnim){
    index=0;
    compt=0;
    vit=vitAnim;
    nbImg=nbImage;
    img=loadImage(nomImg);
    tabImg=new PImage[nbImage];
    for (int i=0;i<nbImg;i++){
      tabImg[i]=img.get(48*i,0,48,48);
    }
  }
  void anim(int x, int y){
    if (compt==vit){
      compt=0;
      index=index+1;
      if (index==nbImg){
        index=0;
      }
    }
    compt=compt+1;
    image(tabImg[index],x,y);
  }
}

void setup(){
  size(200,200);
  an1=new SpriteAnim("./asset/sonic_1.png",6,5);
  an2=new SpriteAnim("./asset/sonic_2.png",4,8);
}

void draw(){
  background(255);
image(an1. tabImg[1],20,50);
  an1.anim(75,25);
  an2.anim(75,125);
}


  