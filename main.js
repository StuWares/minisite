$(document).ready(function(){
    $("#inner-box").hide();
    $("#weather-box").hide();
    contactArrowToggle = "right"
    projectsArrowToggle = "right"
    themeToggle = "dark"

    // Toggle content and toggle arrow direction
    $("#contact-title").on("click", function(){
        $("#inner-box").toggle()
        if (contactArrowToggle === "right"){
        $("#contact-arrow").replaceWith("<i class='fas fa-angle-down' id='contact-arrow-down'></i>");
        contactArrowToggle = "down"
        }
        else {
            $("#contact-arrow-down").replaceWith("<i class='fas fa-angle-right' id='contact-arrow'></i>");
            contactArrowToggle = "right"
        }
    });
    $("#projects-title").on("click", function(){
        $("#weather-box").toggle()
        if (projectsArrowToggle === "right"){
            $("#projects-arrow").replaceWith("<i class='fas fa-angle-down' id='projects-arrow-down'></i>");
            projectsArrowToggle = "down"
        }
        else {
            $("#projects-arrow-down").replaceWith("<i class='fas fa-angle-right' id='projects-arrow'></i>");
            projectsArrowToggle = "right"
        }
        
    });

    // Change theme
    $("#theme-switch").on("click", function(){
        if (themeToggle == "dark"){
            $("body").css("background", "white");
            $("h1").css("color", "black");
            $("#inner-box, #weather-box").css("background-color", "#2196F3");
            themeToggle = "light"
        }
        else {
            $("body").css("background", "#332E3C");
            $("h1").css("color", "rgb(212, 211, 212)");
            $("#inner-box, #weather-box").css("background-color", "#A29587");
            themeToggle = "dark"
        }
    });
});