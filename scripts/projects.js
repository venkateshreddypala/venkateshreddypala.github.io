$(document).scrollTop(0);

$(document).ready(function(){
    $("#back").on("click", function(event)  {
        var tag = $("meta[name=page]").attr("content");
        $("body").load("../index.html", function() {
            var element = document.getElementById(tag);
            element.scrollIntoView({behavior: "smooth"});
        });
    });
});