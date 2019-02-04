var curs;
function setup(){
    createCanvas(200,200);
    curs=createSlider(10,100,50);
}
function draw(){
    background(255);
    ellipse (100,100,2*curs.value(),2*curs.value());
}