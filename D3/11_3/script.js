var tab=[{"valeur": 15, "nom":"A"},{"valeur": 30, "nom":"B"},{"valeur": 35, "nom":"C"},{"valeur": 70, "nom":"D"}];
var couleurs=["green","black","purple","blue"];
var body=d3.select("body");
var svg=body.append("svg");
svg.attr({"width":"400px","height":"400px"});

var pieTab=d3.layout.pie();
pieTab.value(function(d){
		return d.valeur;
	});

var arc=d3.svg.arc();
arc.outerRadius(180);

var grp=svg.append("g")
		.attr("transform","translate(200,200)");
grp.selectAll("path")
	.data(pieTab(tab))
	.enter()
	.append("path")
	.attr("fill",function(d,i){
			return(couleurs[i]);
		})
	.attr("d",arc);
grp.selectAll("text")
	.data(pieTab(tab))
	.enter()
	.append("text")
	.attr("transform", function(d,i) {
		d.innerRadius=0;
		d.outerRadius=180;
        return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
	.attr("fill","white")
    .text(function(d,i) {
        return d.data.nom;
    });
