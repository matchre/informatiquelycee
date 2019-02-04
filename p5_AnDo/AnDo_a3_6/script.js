var data;
var ville;
var formVille;
var btn;
function setup(){
    createCanvas(500,150);
    formVille=select("#ville");
    btn=select("#btn");
    btn.mousePressed(chgVille);
    ville="Paris";
    recupMeteo();
    setInterval(recupMeteo,1800000);
    background(0);
    fill(255);
}
function draw(){
}
function chgVille(){
    ville=formVille.value();
    formVille.value("");
    recupMeteo();
}
function recupMeteo(){
    data=loadJSON("http://api.openweathermap.org/data/2.5/weather?q="+ville+",fr&lang=fr&units=metric&APPID=78afaeedc307e2c3298d958768ee5d14",recupImage);
}
function recupImage(){
    var urlIcone="./icon_meteo/"+data.weather[0].icon+".png";
    loadImage(urlIcone,function(img){
                        background(0);
                        image(img,10,10);
                        affichageMeteo();})
}
function affichageMeteo(img){
    d=new Date(data.dt*1000)
    textAlign(CENTER);
    text("Date et heure du dernier bulletin : "+d.toLocaleString(),250,30);
    text("Météo à "+data.name,250,60);
    text(data.weather[0].description+", température : "+data.main.temp+"°C",250,90);
   
}
