$(document).ready(function(){
    $("#inner-box").hide();
    $("#weather-box").hide();

    $("#contact-title").on("click", function(){
        $("#inner-box").toggle()
    });
    $("#projects-title").on("click", function(){
        $("#weather-box").toggle()
    });

});