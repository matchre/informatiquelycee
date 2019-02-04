var body=d3.select("body");
var svg=body.append("svg");
svg.attr({"width":"600px","height":"600px"});
var path = d3.geo.path();
var projection = d3.geo.conicConformal()
    .center([2.454071, 46.279229])
    .scale(3000)
    .translate([300,300]);
path.projection(projection);
d3.json("departments.json", function(geoJSON) {
	var map=svg.selectAll("path").data(geoJSON.features)
   map.enter()
        .append("path")
        .attr("fill","white")
        .attr("stroke","black")
        .attr("d", path)
        .on("mouseover",function(){
        		d3.select(this)
        			.attr("fill","red")
        	})
        	.on("mouseout",function(){
        		d3.select(this)
        			.attr("fill","white")
        	});
});

