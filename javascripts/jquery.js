$(document).ready(function()
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
