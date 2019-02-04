var body=d3.select("body");
d3.csv("donnees.csv", function(data) {
	var somme=0;
	data.forEach(function(d){
			somme=somme+d.nbre_visiteurs;
	});
	body.append("p").text("Il y a eu "+somme+" visiteurs");
});

