class Balle(object):
 def __init__(self):
    self.posX=10+random(180)
    self.posY=10+random(180)
    self.depX=-5+random(5)
    self.depY=-5+random(5)
    while self.depX==0 or self.depY==0:
        self.depX=-5+random(5)
        self.depY=-5+random(5)
 def afficheBalle(self):
    ellipse(self.posX,self.posY,20,20)
 def depBalle (self):
    if self.posX<10 or self.posX>190:
        self.depX=-self.depX
    if self.posY<10 or self.posY>190:
        self.depY=-self.depY
    self.posX=self.posX+self.depX
    self.posY=self.posY+self.depY
b1=Balle()
b2=Balle()
def setup():
  size(200,200)
  noStroke()
  fill(0)
  b=Balle()
def draw():
  background(255)
  b1.depBalle()
  b1.afficheBalle()
  b2.depBalle()
  b2.afficheBalle()