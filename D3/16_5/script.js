var body=d3.select("body");
var svg=body.append("svg");
svg.attr({"width":"650px","height":"600px"});
svg.attr("class","YlGn")
var path = d3.geo.path();
var projection = d3.geo.conicConformal()
    .center([6.5, 46])
    .scale(35000)
    .translate([300,300]);
path.projection(projection);
var div = d3.select("body").append("div")                  
    .style({"opacity":0,"position": "absolute","left": "440px","top":"100px"});
d3.json("communes.geojson", function(geoJSON) {
	var map=svg.selectAll("path").data(geoJSON.features)
   map.enter()
        .append("path")
        .attr("stroke","black")
        .attr('id', function(d) {return "d" + d.properties.code;})
        .attr("d", path)
        .on("mouseover",function(d){
        		div.transition()        
                .duration(200)
                .style("opacity", .9);      
            div.html("Commune : " + d.properties.nom)
        	})
        	.on("mouseout",function(d){
        		div.transition()
                .duration(500)
                .style("opacity", 0);
            div.html("");
        	});
   d3.csv("pop74.csv", function(csv) {
			var quantile = d3.scale.quantile().domain([0, d3.max(csv, function(e) { return +e.POP; })]).range(d3.range(9));
			legend = svg.append('g')
        		.attr('transform', 'translate(525, 150)')
        		.attr('id', 'legend');
        	var lg=legend.selectAll('.colorbar').data(d3.range(9))
      	lg.enter().append('svg:rect')
        		.attr('y', function(d) { return d * 20 + 'px'; })
        		.attr('height', '20px')
        		.attr('width', '20px')
        		.attr('x', '0px')
        		.attr("class", function(d) { return "q" + d + "-9"; });
        	legendScale = d3.scale.linear()
    			.domain([0, d3.max(csv, function(e) { return +e.POP; })])
    			.range([0, 9 * 20]);
    		legendAxis = d3.svg.axis()
    			.scale(legendScale)
    			.orient('right')
    			.tickSize(6)
    			.ticks(9);
    		legendLabels = svg.append('g')
    			.attr('transform', 'translate(550, 150)')
    			.style({"font-family": "sans-serif","font-size": "8px"})
    			.attr({"fill": "none","stroke": "black"})
    			.call(legendAxis);
			csv.forEach(function(e,i) {
    			d3.select("#d74" + e.CODE)
        			.attr("class", function(d) { return "q" + quantile(+e.POP) + "-9"; })
    		});
    });
});

