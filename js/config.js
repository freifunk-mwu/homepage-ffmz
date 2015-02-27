
$(document).ready(function(){

    var $navH = $("#navi").height();

    $('#navi').onePageNav({
        scrollSpeed: 1200,
        scrollOffset: 0,
        scrollThreshold: 0.2,
        currentClass: 'current',
        easing: 'easeInOutQuint'
    });


    // • ------------------------------------------------------- fixed header

    var $nav = $("#navigation");
    var asideTop = $nav.offset().top - 1;

    // • ------------------------------------------------------- wenn skalliert wird

    $(window).resize(function () {
        invert();
    });

    // • ------------------------------------------------------- wenn gescrollt wird


    $(window).scroll(function () {
        fixNav();
        invert();

        // var st = $(this).scrollTop();
     //   $('#fix1').animate({opacity: 1 - st/1000}, 0);

    });

    fixNav();

    function fixNav() {
        var asideY = $(window).scrollTop();
                if (asideY >= asideTop) {
                    $nav.css({
                        position: 'fixed',
                        top: '0px',
                        left:'0px',
                    });
        } else {
                    $nav.removeAttr('style');
        }
    }

// • ------------------------------------------------------- internte menu links

    $("a.trigger").click(function(e) {
        e.preventDefault();
        var hash = $(this).attr("href");
        $("#navi").find("a[href='"+hash+"']").trigger('click');
    });

// • ------------------------------------------------------- to top link

    $("#logo_small").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    
    $("#logo_small_top").click(function(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

  	

// • ------------------------------------------------------- menu invertieren

    function invert() {

        // invert menu
        var offset = $("#impressum").offset();

        // fixe elemente umfärben
        if ( $(window).scrollTop() > $("#navi").height() && $(window).scrollTop() < offset.top - $("#impressum").height() ) {
            $("#nach_oben").addClass("invert");
            $('#description_a').addClass("invert");
            $('#contact_a').addClass("invert");
        } else {
            $("#nach_oben").removeClass("invert");
            $('#description_a').removeClass("invert");
            $('#contact_a').removeClass("invert");
        }

        // nach oben button umfärben
        if ( $(window).scrollTop() > $("#navi").height() ) {
            $("#nach_oben").fadeIn(300);
        } else {
            $("#nach_oben").fadeOut(300);
        }

        // navigation umfärben wenn gescrollte abstand größer ist als der abstand von impressum-anfang (abzüglich navihöhe) zum seitenanfang
        /*
        if ( $(window).scrollTop() > offset.top - $navH/2) {
            $("#navi li a").addClass("invert");
        } else {
            $("#navi li a").removeClass("invert");
        }
        */
    }

});


