$(function() {
   $(".menu_nav a").on("click", function(e){
        e.preventDefault();
        var id = $(this).attr("href");
        var targetOffset = $(id).offset().top;
        var menuHeight = $(".menu_nav").innerHeight();

        // console.log(targetOffset);
        $("html, body").animate({
            scrollTop: targetOffset
        }, 700);    
   });
});