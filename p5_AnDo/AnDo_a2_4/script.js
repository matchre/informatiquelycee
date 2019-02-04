var tabData;
function preload(){
    tabData=loadJSON("ident.json");
}
function setup(){
    createCanvas(500,100);
    textAlign(CENTER);
    for (i=0;i<tabData.length;i++){
        text("Bonjour, je m'appelle "+tabData[i].prenom+" "+tabData[i].nom+", je suis né le "+tabData[i].date_naissance+".",250,30+30*i);
    }
    
}
function draw(){
}