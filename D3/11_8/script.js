var tab_0=[30,150,27,34];
var tab_1=[25,120,40,75];
var tab_2=[40,110,80,76];
var tab=[tab_0,tab_1,tab_2]
var tab_leg=["A","B","C","D"]
var n=0;
var couleurs=["green","purple","blue","olive"];
var body=d3.select("body");
var svg=body.append("svg");
svg.attr({"width":"600px","height":"400px"})

var leg=svg.selectAll("g.leg").data(tab_leg)
leg.enter()
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
        return d;
    });
var pieTab=d3.layout.pie();
pieTab.value(function(d){
		return d;
	});

var arc=d3.svg.arc();
arc.outerRadius(200);
var grp=svg.append("g").attr("transform","translate(200,200)");
var graph=grp.selectAll("path").data(pieTab(tab_0))
graph.enter()
	.append("path")
	.attr("fill",function(d,i){
			return(couleurs[i]);
		})
	.attr("d",arc)
	.each(function(d){this._current=d;});

function update(data){
    graph.data(pieTab(data));
    graph.transition().duration(750).attrTween("d", arcTween);

    
}
function arcTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
}

update(tab[0]);
setInterval(function() {
	if (n==2){
		n=-1;
	}
	n=n+1;
	update(tab[n]);
}, 3000);