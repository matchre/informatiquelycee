var table;
var nom;
var prenom;
var date_nai
function preload(){
    table = loadTable("ident.csv","csv","header");
}
function setup() {
    createCanvas(800,100)
    lig=table.getRow(1);
    nom=lig.getString("nom");
    prenom=lig.getString("prenom");
    date_nai=lig.getString("date_naissance");
    for (i=0;i<table.getRowCount();i++){
        lig=table.getRow(i);
        nom=lig.getString("nom");
        prenom=lig.getString("prenom");
        date_nai=lig.getString("date_naissance");
        text("Bonjour, je m'appelle "+prenom+" "+nom+", je suis né le "+date_nai,10,30+30*i);
    }
    
}
function draw(){
}