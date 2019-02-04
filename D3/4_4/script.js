var body=d3.select("body");
var svg=body.append("svg");
svg.attr({"width":"750px","height":"550px"})
svg.append("circle")
    .attr({"cx":"400px","cy":"300px","r":"100px","fill":"blue","stroke":"red"});
svg.append("rect")
    .attr({"x":"300px","y":"300px","width":"300px","height":"100px","fill":"red","fill-opacity":"0.4"}); 
svg.append("path")
    .attr({"d":"M 400,300 L 450,250 L 500,300 L 550,250","fill":"none","stroke":"black","stroke-width":"5px"});   
