var data;
function preload(){
    data=loadJSON("ident.json");
}
function setup(){
    createCanvas(500,100);
    textAlign(CENTER);
    text("Bonjour, je m'appelle "+data[2].prenom+" "+data[2].nom+", je suis né le "+data[2].date_naissance+".",250,50);
}
function draw(){
}