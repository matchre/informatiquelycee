void setup(){
  size(300,300);
  fill(255,0,0);
  rect(50,100,200,100);
  textAlign(CENTER);
  fill(0);
  text("Cliquez dans le rectangle rouge",150,150);
}
void draw(){
  //
}
void mousePressed(){
  if (inRect()){  
    fill(0,255,0);
    rect(50,100,200,100);
    textAlign(CENTER);
    fill(0);
    text("Très bien, merci",150,150);
  }
}
boolean inRect(){
  if (mouseX>50 && mouseX<250 && mouseY>100 && mouseY<200){
    return true;
  }
  else {
    return false;
  }
}