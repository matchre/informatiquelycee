var body=d3.select("body");
d3.csv("donnees.csv", function(data) {
	var somme=0;
	for (i=0;i<data.length;i++){
		somme=somme+data[i].nbre_visiteurs;
	}
	body.append("p").text("Il y a eu "+somme+" visiteurs");
});

