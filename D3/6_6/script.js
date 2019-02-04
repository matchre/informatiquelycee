var tab=[10,8,25,15,4,30,12,28,2];
var body=d3.select("body");
var svg=body.append("svg");
svg.attr({"width":"500px","height":"400px"});
svg.selectAll("rect")
    .data(tab)
    .enter()
    .append("rect")
    .attr({"width":"30px","stroke":"black"})
    .attr("height",function(d,i){
        return d*10
    })
    .attr("x",function(d,i){
        return (100+i*34)
    })
	.attr("y",function(d,i){
        return (380-d*10)
    })
	.attr("fill",function(d,i){
		if (d>=15){
			return "blue";
		}
		else{
			return "red";
		}
	});
