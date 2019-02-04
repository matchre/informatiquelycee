// requiert jQuery
// Tom Niget 2017
$(document).ready(function() {
    $("table.notborder").find("td").css("border", "0px");
});

function poser_conv_base(nombre, base, parent) {
    var nb_orig = nombre;
    var base_fix = Math.abs(base);
    parent = parent || $(document.scripts[document.scripts.length - 1].parentNode);

    // donne la couleur du nombre (on change de couleur à chaque ligne)
    var cols = ["purple", "blue", "green", "brown", "orange"];
    var gc = function(c) {
        return c == 0 ? "red" : cols[c % cols.length];
    };

    // pré-mâche le code du span qui contient le nombre
    var gs = function(t, c) {
        return '<span style="color:' + gc(c) + '!important">$' + t + '$</span>';
    };

    // noms francisés des bases
    var bases = {
        1: "unaire",
        2: "binaire",
        3: "ternaire",
        4: "quaternaire",
        5: "quinaire",
        6: "sénaire",
        7: "septénaire",
        8: "octal",
        9: "nonaire",
        10: "décimal",
        12: "duodécimal",
        13: "tridécimal",
        16: "hexadécimal",
        20: "vicésimal",
    };

    // liste des chiffres (marque jusqu'en base 62)
    var digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    var res = "";
    var t = $("<table/>").appendTo(parent); // créer le tableau

    var i = 1; // numéro du chiffre

    while (nombre != 0) {
        var reste = Math.abs(nombre % base);
        var d = nombre / base;
        d = Math.sign(d) * Math.floor(Math.abs(d));

        var tr = $("<tr/>");

        tr.append($("<td/>").html(gs(nombre + " ", i)));		// dividende
        tr.append($("<td/>").html("$ \\div " + base + " = $"));	// opération et diviseur (indice de la base)
        tr.append($("<td/>").html(gs(" " + d + " ", i + 1)));	// quotient
        tr.append($("<td/>").html("$ + $"));					// symbole plus
        tr.append($("<td/>").html(gs(" " + reste, 0)));			// reste

        // ajouter l'affichage du chiffre au dessus de 9
        if (base > 10)
            tr.append($("<td/>").html(gs(" " + digits[reste], 0)));

        res = digits[reste] + res;

        t.append(tr);

        i++;
        nombre = d;
    }

    // allouer de l'espace pour les chiffres en plus
    if (base > 10)
        t.find("td:last-child").css("padding-left", "20px");

    // appliquer le CSS aux colonnes du tableau
    t.find("td").css("border", "0px").css("text-align", "right");

    parent.append("<p><b>Attention, il faut bien lire de bas en haut !</b></p>");
    parent.append("<p><b>" + nb_orig + "</b> en base 10 vaut donc <b>" + res + "</b> en " + (base in bases ? bases[base] : "base " + base) + ".</p>");
}