var tab_0=[2,6,8,23,30,27,8];
var tab_1=[5,15,5,20,25,28,15];
var tab_2=[4,10,9,18,21,29,10];
var tab=[tab_0,tab_1,tab_2];
var n=0;

var body=d3.select("body");

var echelleX=d3.scale.ordinal()
                .domain(["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"])
                .rangeBands([30, 370]);
var echelleY=d3.scale.linear()
                .domain([0,30])
                .range([370,30]);
var xAxe = d3.svg.axis()
                  .scale(echelleX)
                  .orient("bottom");
var yAxe = d3.svg.axis()
                  .scale(echelleY)
                  .orient("left");
var svg=body.append("svg");
svg.attr({"width":"400px","height":"400px"});
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
var titre=svg.append("text").attr("x",80).attr("y",20);
function update(data,n){
	titre.text("");
	titre.text("Semaine n° "+(n+1));
	var rect=svg.selectAll("rect").data(data);
	rect.transition().duration(700).attr("height",function(d,i){
        	return (370-echelleY(d))
    	})
    	.attr("y",function(d,i){
        	return (echelleY(d))
    	});
    rect.enter()
    	.append("rect")
    	.attr({"fill":"blue","stroke":"black"})
    	.attr("width",function(d,i){
        	return (340/data.length);
    	})
    	.attr("height",function(d,i){
        	return (370-echelleY(d))
    	})
    	.attr("y",function(d,i){
        	return (echelleY(d))
    	})
    	.attr("x",function(d,i){
        	return (30+i*340/data.length)
    	});
}
update(tab[0],n);
setInterval(function() {
	if (n==2){
		n=-1;
	}
	n=n+1;
	update(tab[n],n);
}, 3000);
