$(document).ready(function(){

        var $menu = $("#comp-links");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 420 && $menu.hasClass("default") ){
                $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 420 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });
