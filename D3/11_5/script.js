var tab=[{"valeur": 18287000, "nom":"États-Unis"},{"valeur": 11285000, "nom":"Chine"},{"valeur": 4882000, "nom":"Japon"},{"valeur": 3909000, "nom":"Allemagne"},{"valeur": 3003000, "nom":"Royaume-Uni"},{"valeur":2935000, "nom":"France"}];
var couleurs=["green","black","purple","blue","grey","olive"];
var body=d3.select("body");
var svg=body.append("svg");
svg.attr({"width":"700px","height":"700px"});

var pieTab=d3.layout.pie();
pieTab.value(function(d){
		return d.valeur;
	});

var arc=d3.svg.arc();
arc.outerRadius(340);

var grp=svg.selectAll("g.arcs")
		.data(pieTab(tab))
		.enter()
		.append("g")
		.attr("class","arcs")
		.attr("transform","translate(350,350)");

grp.append("path")
	.attr("fill",function(d,i){
			return(couleurs[i]);
		})
	.attr("d",arc);

grp.append("text")
	.attr("transform", function(d,i) {
		d.innerRadius=0;
		d.outerRadius=380;
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
	.attr("fill","white")
	.style("font-size","10px")
    .text(function(d,i) {
        return d.data.nom;
    });
