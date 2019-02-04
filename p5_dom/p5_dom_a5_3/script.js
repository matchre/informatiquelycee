var para;
function setup(){
    noCanvas();
    para=createP("J'ai un fond rouge, mais que se passe-t-il si vous me survolez avec la souris ?");
    para.mouseOver(changeFondIn);
    para.mouseOut(changeFondOut);
    
}
function draw(){
}
function changeFondIn(){
    para.style("background-color","rgb(0,255,0)");
    para.html("maintenant j'ai un fond vert");
}
function changeFondOut(){
    para.style("background-color","rgb(255,0,0)");
    para.html("J'ai un fond rouge, mais que se passe-t-il si vous me survolez avec la souris ?");
}
