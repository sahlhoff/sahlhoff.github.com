var intro = true;
var isOpen = true;
var baseTitle = "SAHLHOFF | Digital Creative";
var isIphone = false;
var isIpad = false;
if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
    isIphone = true;
}

if ((navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/iPod/i))) {
    isIpad = true;
}

$(document).ready(function() {

    function resizeMe() {
        $("header").height($(window).height());

        $("#about-wrapper").height($(window).height());



        $("#loader-img").width($(window).width());




        $("#intro ul").css("marginTop", ($(window).height() * 0.5 - $("#intro ul").height() * 0.5) - $("#nav").height() * 0.5);
        if (isOpen) {
            $("header").css({
                "top": 0
            });
        } else {

            $("header").css({
                "top": -($(window).height() - $("#nav").height())
            });
        }
    }

    if (!isIphone) {
        resizeMe();
        $("#intro ul").show();

        $("#slider_s").nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 500, // Slide transition speed
            pauseTime: 2000, // How long each slide will show
            directionNav: false, // Next & Prev navigation
            directionNavHide: true, // Only show on hover
            controlNav: false, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            controlNavThumbsFromRel: false, // Use image rel for thumbs
            keyboardNav: false, // Use left & right arrows
            pauseOnHover: false, // Stop animation while hovering
            randomStart: true, // Start on a random slide
        });

        $("#slider_a").nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 500, // Slide transition speed
            pauseTime: 2000, // How long each slide will show
            directionNav: false, // Next & Prev navigation
            directionNavHide: true, // Only show on hover
            controlNav: false, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            controlNavThumbsFromRel: false, // Use image rel for thumbs
            keyboardNav: false, // Use left & right arrows
            pauseOnHover: false, // Stop animation while hovering
            randomStart: true, // Start on a random slide
        });

        $("#slider_h").nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 500, // Slide transition speed
            pauseTime: 2000, // How long each slide will show
            directionNav: false, // Next & Prev navigation
            directionNavHide: true, // Only show on hover
            controlNav: false, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            controlNavThumbsFromRel: false, // Use image rel for thumbs
            keyboardNav: false, // Use left & right arrows
            pauseOnHover: false, // Stop animation while hovering
            randomStart: true, // Start on a random slide
        });

        $("#slider_l").nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 500, // Slide transition speed
            pauseTime: 2000, // How long each slide will show
            directionNav: false, // Next & Prev navigation
            directionNavHide: true, // Only show on hover
            controlNav: false, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            controlNavThumbsFromRel: false, // Use image rel for thumbs
            keyboardNav: false, // Use left & right arrows
            pauseOnHover: false, // Stop animation while hovering
            randomStart: true, // Start on a random slide
        });

        $("#slider_hh").nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 500, // Slide transition speed
            pauseTime: 2000, // How long each slide will show
            directionNav: false, // Next & Prev navigation
            directionNavHide: true, // Only show on hover
            controlNav: false, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            controlNavThumbsFromRel: false, // Use image rel for thumbs
            keyboardNav: false, // Use left & right arrows
            pauseOnHover: false, // Stop animation while hovering
            randomStart: true, // Start on a random slide
        });

        $("#slider_o").nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 500, // Slide transition speed
            pauseTime: 2000, // How long each slide will show
            directionNav: false, // Next & Prev navigation
            directionNavHide: true, // Only show on hover
            controlNav: false, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            controlNavThumbsFromRel: false, // Use image rel for thumbs
            keyboardNav: false, // Use left & right arrows
            pauseOnHover: false, // Stop animation while hovering
            randomStart: true, // Start on a random slide
        });

        $("#slider_f").nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 500, // Slide transition speed
            pauseTime: 2000, // How long each slide will show
            directionNav: false, // Next & Prev navigation
            directionNavHide: true, // Only show on hover
            controlNav: false, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            controlNavThumbsFromRel: false, // Use image rel for thumbs
            keyboardNav: false, // Use left & right arrows
            pauseOnHover: false, // Stop animation while hovering
            randomStart: true, // Start on a random slide
        });

        $("#slider_ff").nivoSlider({
            effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
            slices: 15, // For slice animations
            boxCols: 8, // For box animations
            boxRows: 4, // For box animations
            animSpeed: 500, // Slide transition speed
            pauseTime: 2000, // How long each slide will show
            directionNav: false, // Next & Prev navigation
            directionNavHide: true, // Only show on hover
            controlNav: false, // 1,2,3... navigation
            controlNavThumbs: false, // Use thumbnails for Control Nav
            controlNavThumbsFromRel: false, // Use image rel for thumbs
            keyboardNav: false, // Use left & right arrows
            pauseOnHover: false, // Stop animation while hovering
            randomStart: true, // Start on a random slide
        });

    } else {
        if (location.hash == "") {
            location.href = '#/personal';
        }
    }



    $(window).bind("resize", function() {
        resizeMe();
    });

    resizeMe();

    $("#header-close").hover(function() {
        $(this).css("opacity", 1);
    }, function() {
        $(this).css("opacity", 0.3);
    });



    if ($.address.pathNames() == "") {
        //closeDrawer();
    }

    $.address.change(function(event) {
        params = $.address.pathNames();
        resetMenu();
        switch (params[0]) {
            case "personal":
                $.address.title("Personal Work - " + baseTitle);
                $("#nav-personal").addClass("nav-on");
                if (params[1] == undefined) {
                    intro = false;
                    closeDrawer();
                    loaderOn();
                    $('#content').load('/personal', function() {
                        loaderOff();
                        $("#main").delay(300).fadeIn("slow");
                    });

                } else {
                    if (intro == true) {
                        $("#intro").fadeOut("fast", function() {
                            showContent(params[1]);
                            intro = false;
                            $("#intro").remove();
                        });
                    } else {
                        showContent(params[1]);
                    }
                }

                break;

            case "commercial":
                $.address.title("Commercial Work - " + baseTitle);
                $("#nav-commercial").addClass("nav-on");
                if (params[1] == undefined) {
                    intro = false;
                    closeDrawer();
                    loaderOn();
                    $('#content').load('/commercial', function() {
                        loaderOff();
                        $("#main").delay(300).fadeIn("slow");
                    });

                } else {
                    if (intro == true) {
                        $("#intro").fadeOut("fast", function() {
                            showContent(params[1]);
                            intro = false;
                            $("#intro").remove();
                        });
                    } else {
                        showContent(params[1]);
                    }
                }

                break;

            case "about":
                intro = false;
                $.address.title("About - " + baseTitle);
                $("#nav-about").addClass("nav-on");
                closeDrawer();


                $("#content").fadeOut("fast", function() {
                    loaderOn();
                    $('#content').load('/about', function() {
                        loaderOff();
                        resizeMe();
                        $("#content").show();
                        $("#about").delay(300).fadeIn("slow");


                    });
                });



                break;

            case "blog":
                intro = false;
                $.address.title("Blog - " + baseTitle);
                $("#nav-blog").addClass("nav-on");
                closeDrawer();

                $("#content").fadeOut("fast", function() {
                    loaderOn();
                    $('#content').html("");
                    $('#content').load('/blog', function() {
                        loaderOff();
                        $("#content").show();
                        $("#contact").delay(300).fadeIn("slow");


                    });
                });

                break;


        }

    });

    $("#header-close").bind('click tap', function() {
        closeDrawer();
    });


    if (!isIpad && !isIphone) {
        $(".work-item").live({
            mouseenter: function() {
                $(this).find("h3").fadeIn("fast");
                $(this).find("img").animate({
                    opacity: 0.6
                }, 500);
            },
            mouseleave: function() {
                $(this).find("h3").fadeOut("fast");
                $(this).find("img").animate({
                    opacity: 1
                }, 500);
            }
        });
    }



    function showContent(slug) {
        isOpen = true;
        $("#main").fadeOut('fast');
        $("#header-close").show();

        $('#work-wrapper').html("");
        loaderOn();

        params = $.address.pathNames();

        $("#work-wrapper").hide();
        $('#work-wrapper').load($.address.path(), function() {
            $("#header-close").attr("href", "#/" + params[0]);
            $("#work-wrapper").fadeIn("slow");
            loaderOff();

            $("#logo").slideDown(1000);
            $("#subnav").animate({
                "marginTop": "-4px"
            }, 1000);

            $("header").animate({
                "top": "0px"
            }, 1000, function() {});
        });





    }

    function closeDrawer() {
        $(".arrow-right, .arrow-left").fadeOut("fast");
        isOpen = false;
        $("#logo").slideDown(1000);
        $("#subnav").animate({
            "marginTop": "-4px"
        }, 1000);
        $("header").animate({
            "top": -($(window).height() - $("#nav").height())
        }, 1000, function() {
            $("#intro").remove();
        });
    }

    function resetMenu() {
        $("#subnav a").removeClass("nav-on");
    }

    function loaderOn() {
        $("#loader").fadeIn("fast");
    }

    function loaderOff() {
        $("#loader").fadeOut("fast");
    }
});