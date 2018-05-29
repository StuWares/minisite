$(document).ready(function(){
    $("#inner-box").hide();
    $("#weather-box").hide();
    contactArrowToggle = "right"
    projectsArrowToggle = "right"

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

});