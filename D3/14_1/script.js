var tab=[30,150,27,85,3,12];

var body=d3.select("body");
var para=body.selectAll("p").data(tab);
para.enter()
    .append("p")
    .text(function(d,i){
        return ("La valeur n°"+i+" du tableau est : "+d)
    });
para.on("click",function(){
        d3.select(this)
            .style("color","red")
    });

