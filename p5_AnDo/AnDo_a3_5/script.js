var data;
var desc;
var ville;
var temp;
function setup(){
    createCanvas(500,150);
    recupMeteo();
    setInterval(recupMeteo,1800000);
    background(0);
    fill(255);
}
function draw(){
}
function recupMeteo(){
    data=loadJSON("http://api.openweathermap.org/data/2.5/weather?q=bonneville,fr&lang=fr&units=metric&APPID=78afaeedc307e2c3298d958768ee5d14",recupImage);
}
function recupImage(){
    var urlIcone="./icon_meteo/"+data.weather[0].icon+".png";
    loadImage(urlIcone,function(img){
                        background(0);
                        image(img,10,10);
                        affichageMeteo();})
}
function affichageMeteo(img){
    desc=data.weather[0].description;
    temp=data.main.temp;
    ville=data.name;
    d=new Date(data.dt*1000)
    textAlign(CENTER);
    text("Date et heure du dernier bulletin : "+d.toLocaleString(),250,30);
    text("Météo à "+ville,250,60);
    text(desc+", température : "+temp+"°C",250,90);
   
}
