$(document).ready(function()
{
	var objects = [$("nav"), $("#welcome"), $("#welcome h1"), $("#welcome h1 small"), $("#about-me"), $("#projects"), $("#other-works"), $("footer")]
	var delays = [400, 1000, 500, 500, 800, 800, 800, 800];
	
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

/*
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