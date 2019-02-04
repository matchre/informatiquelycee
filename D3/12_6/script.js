var body=d3.select("body");
var echelleX=d3.scale.ordinal()
                .rangeBands([30, 370]);
var echelleY=d3.scale.linear()
                .range([370,30]);
var xAxe = d3.svg.axis()
                  .scale(echelleX)
                  .orient("bottom");
var yAxe = d3.svg.axis()
                  .scale(echelleY)
                  .orient("left");
var svg=body.append("svg");
svg.attr({"width":"400px","height":"400px"});

d3.csv("donnees.csv", function(data) {
	echelleX.domain(data.map(function(d,i) { return d.jour; }));
    echelleY.domain([0, d3.max(data, function(d,i) { return d.nbre_visiteurs; })]);
	var rect=svg.selectAll("rect").data(data)
    rect.enter()
    	.append("rect")
    	.attr({"fill":"blue","stroke":"black"})
    	.attr("width",function(d,i){
        	return (340/data.length);
    	})
    	.attr("height",function(d,i){
        	return (370-echelleY(d.nbre_visiteurs))
    	})
    	.attr("y",function(d,i){
        	return (echelleY(d.nbre_visiteurs))
    	})
    	.attr("x",function(d,i){
        	return (30+i*340/data.length)
    	});
	svg.append("g")
    	.style({"font-family": "sans-serif","font-size": "9px"})
    	.attr({"fill": "none","stroke": "black"})
    	.attr("transform","translate(0,370)")
    	.call(xAxe);
	svg.append("g")
    	.style({"font-family": "sans-serif","font-size": "11px"})
    	.attr({"fill": "none","stroke": "black"})
    	.attr("transform","translate(30,0)")
    	.call(yAxe);
});

