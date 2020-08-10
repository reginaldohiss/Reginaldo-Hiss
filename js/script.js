$(function() {
   $(".menu_nav a").on("click", function(e){
        e.preventDefault();
        var id = $(this).attr("href");
        var targetOffset = $(id).offset().top;

        $("html, body").animate({
            scrollTop: targetOffset
        }, 750);    
   });
});