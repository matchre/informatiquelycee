var curs;
function setup(){
    createCanvas(200,200);
    fill(0);
    curs=createSlider(10,100,50);
    sel = createSelect();
    sel.option('noir');
    sel.option('rouge');
    sel.option('vert');
    sel.changed(selChange);
}
function draw(){
    background(255);
    ellipse (100,100,2*curs.value(),2*curs.value());
}
function selChange() {
    if (sel.value()=="noir"){
        fill(0);
    }
    if (sel.value()=="rouge"){
        fill(255,0,0);
    }
    if (sel.value()=="vert"){
        fill(0,255,0);
    }
    
}