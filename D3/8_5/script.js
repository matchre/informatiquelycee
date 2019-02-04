var tab=[2,6,8,23,30,27,8];
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
svg.attr({"width":"400px","height":"400px"})
svg.selectAll("rect")
    .data(tab)
    .enter()
    .append("rect")
    .attr({"fill":"blue","stroke":"black"})
    .attr("width",function(d,i){
        return (340/tab.length);
    })
    .attr("height",function(d,i){
        return (370-echelleY(d))
    })
    .attr("y",function(d,i){
        return (echelleY(d))
    })
    .attr("x",function(d,i){
        return (30+i*340/tab.length)
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

