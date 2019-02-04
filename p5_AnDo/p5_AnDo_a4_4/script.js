var map;
function setup(){
	noCanvas();
    gotData();
	map = L.map('map');
    var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © OpenStreetMap contributors';
    var osm = new L.TileLayer(osmUrl, {attribution: osmAttrib});
    map.setView([45.0,0], 2);
    map.addLayer(osm);
}
function gotData(){
    loadJSON("http://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=6",afficheData);    
}
function afficheData(data){
    for (i=0;i<data.features.length;i++){
        var long=data.features[i].geometry.coordinates[0];
        var lat=data.features[i].geometry.coordinates[1];
        var lieu=data.features[i].properties.place;
        var d=new Date(data.features[i].properties.time)
        var date=d.toLocaleString();
        var mag=data.features[i].properties.mag;
        var msg="<p>lieu : "+lieu+"</p><p>"+"date et heure : "+date+"</p><p>magnitude : "+mag+"</p>"
        var marker = L.marker([lat,long]);
        marker.bindPopup(msg);
        marker.addTo(map);
    }
}
function draw(){
}