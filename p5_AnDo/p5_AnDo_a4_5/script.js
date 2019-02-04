var map;
function setup(){
	noCanvas();
    gotData();
	map = L.map('map');
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © OpenStreetMap contributors';
    var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
    map.setView([47.0, 3.0], 6);
    map.addLayer(osm);
}
function gotData(){
    loadJSON("departements.geojson",afficheData);    
}
function afficheData(data){
    var geo=L.geoJson(data)
    geo.addTo(map);
}
function draw(){
}