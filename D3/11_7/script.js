var tab=[{"valeur": 18287000, "nom":"États-Unis"},{"valeur": 11285000, "nom":"Chine"},{"valeur": 4882000, "nom":"Japon"},{"valeur": 3909000, "nom":"Allemagne"},{"valeur": 3003000, "nom":"Royaume-Uni"},{"valeur":2935000, "nom":"France"}];
var couleurs=["green","black","purple","blue","grey","olive"];
var body=d3.select("body");
body.append("h1").style("text-align","center").text("PIB en 2014");
var svg=body.append("svg");
svg.attr({"width":"600px","height":"400px"})

var pieTab=d3.layout.pie();
pieTab.value(function(d){
		return d.valeur;
	});

var arc=d3.svg.arc();
arc.outerRadius(200);

var grp=svg.selectAll("g.arcs")
		.data(pieTab(tab))
		.enter()
		.append("g")
		.attr("class","arcs")
		.attr("transform","translate(210,200)");

grp.append("path")
	.attr("fill",function(d,i){
			return(couleurs[i]);
		})
	.attr("d",arc);

var leg=svg.selectAll("g.leg")
		.data(pieTab(tab))
		.enter()
		.append("g")
		.attr("class","leg")
		.attr("transform",function(d,i){
				return "translate(450,"+(50+30*i)+")";	
			});

leg.append("rect")
	.attr("width",15)
	.attr("height",15)
	.attr("fill",function (d,i){
		return couleurs[i];
	});
leg.append("text")
	.attr("x", 25)
	.attr('y', 12)
	.attr("fill","black")
	.style("font-size","12px")
    .text(function(d,i) {
        return d.data.nom;
    });

