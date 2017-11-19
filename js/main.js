$(document).ready(function() {
    $(".subFlex").lightGallery(); 

    var resize = function() {
        var padding = $("header").innerHeight() - $("header").height();
        $("header").css("padding-top", ($("header").innerHeight() / 2) - ($("#header-wrapper").height() / 2));
    }
    resize();
    $(window).resize(resize);
    
    $("#nav-down").click(function() {
       $("html, body").animate({
           scrollTop: $("#about-me").offset().top - 20
       }, 500); 
    });

    $("#header-wrapper").addClass("rotateSquare");
    $("#bot-square").delay(700).animate({
        top : "+=75px",
    }, 300, "linear");

    $("#top-square").delay(700).animate({
        top : "-=75px",
    }, 300, "linear", function() {
        $("#top-square").addClass("fade-top");
        $("#bot-square").addClass("fade-bot");
    });

    $("#divider").delay(700).animate({
        opacity: 1.0
    }, 100, "swing");

    var dividerW = "+=" + $("#top-square").outerWidth() * 1.5 + "px";
    $("#divider").animate({
        width: dividerW
    }, 500, "swing");

    $("#title, #description").delay(1150).animate({
        opacity: 1.0
    }, 250, "swing");
    
    $("#nav-down").delay(1500).animate({
        opacity:1.0,
        bottom: "+=20px"
    }, 250, "swing");
    
    $("#youtube-player").click(function() {
        console.log("ASDFADS");
        $(".ytp-youtube-button").hide();
    });
    
    if ($("#youtube-player") != undefined) {
        console.log("ASDFADdddS");
    }
    
});

/*$(document).ready(function()
{
	var objects = [$("nav"), $("#welcome"), $("#welcome h1"), $("#welcome h1 small"), $("#about-me"), $("#projects"), $("#other-works"), $("footer")]
	var delays = [400, 500, 500, 500, 800, 800, 800, 800];
	
	for(i = 0; i < objects.length; i++) {
		if (i > 0) {
			var delayCount = 0;
			for (j = i -1; j >= 0; j--) {
				delayCount += delays[j];
			}
			objects[i].delay(delayCount).animate({opacity: '1.0'}, delays[i]);
		} else {
			objects[i].animate({opacity: '1.0'}, delays[i]);
		}
	}
});
{
	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "fast");
	});

	if ($(window).scrollTop() <= 0) $(".home").hide(); 

	$("a[href='top']").click(function() {
		$(".home").hide(200);
	})
});


$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var width = $(window).width();

	if (scroll <= 0) {
		$(".home").hide(200);
	}
	else { 
		$(".home").show(200);
	}
});
*/