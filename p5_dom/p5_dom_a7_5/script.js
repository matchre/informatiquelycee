var zone;
var msg;
function setup(){
    noCanvas();
    zone=select("#zone");
    zone.dragOver(zoneIn);
    zone.dragLeave(zoneOut);
    zone.drop(fichierCharge);
    msg=createP("");
}
function draw(){
}
function zoneIn(){
    zone.style("background-color","#ccc");
}
function zoneOut(){
    zone.style("background-color","#fff");
}
function fichierCharge(file){
    msg.html("");
    zone.style("background-color","#fff");
    if (file.type=="image"){
        img = createImg(file.data);
        img.size(100,100);
    }
    else {
        msg.html("Désolé, ce format de fichier n'est pas pris en charge");   
    }
}
