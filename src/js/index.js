
$("#tuttiEventi").click(function(){
    $("#eventoFita").fadeIn("fast");
    $("#eventoSwiss").fadeIn("fast");
});

$("#fita").click(function(){
    $("#eventoFita").fadeIn("fast");
    $("#eventoSwiss").fadeOut("fast");
}); 

$("#gare3d").click(function(){
    $("#eventoFita").fadeIn("fast");
    $("#eventoSwiss").fadeIn("fast");
}); 

$("#fiere").click(function(){
    $("#eventoFita").fadeOut("fast");
    $("#eventoSwiss").fadeOut("fast");
});

$("#manifestazioni").click(function(){
    $("#eventoFita").fadeOut("fast");
    $("#eventoSwiss").fadeOut("fast");
}); 