$(document).ready(function() {
	// Activate Carousel
	$("#myCarousel").carousel();

	// Enable Carousel Indicators
	$(".item1").click(function() {
		$("#myCarousel").carousel(0);
	});
	$(".item2").click(function() {
		$("#myCarousel").carousel(1);
	});
	$(".item3").click(function() {
		$("#myCarousel").carousel(2);
	});
	$(".item4").click(function() {
		$("#myCarousel").carousel(3);
	});

	// Enable Carousel Controls
	$(".left").click(function() {
		$("#myCarousel").carousel("prev");
	});
	$(".right").click(function() {
		$("#myCarousel").carousel("next");
	});

	$('.carousel-control').click(function(e) {
		e.preventDefault();
	});

	// show scroll-up
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 200) {
			$(".arrow-up i").fadeIn();
		} else {
			$(".arrow-up i").fadeOut();
		}
	});

	/* scroll to top */
	$(".arrow-up i").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
		return false;
	});

	/* image hover effect */

	$('.explore-row .col-sm-3').hover(function() {
		$(this).find('.arrow').show();

	}, function() {
		$(this).find('.arrow').hide();
	});

	// pagination
	$('#pagination').pagination({
		pages: 10,
		
		cssStyle: 'light-theme',
		displayedPages:3,
		currentPage: 1
	});
        
        var row_width = $('.service-row').find('.col-sm-8').height();
	var width = $(window).width();
	var doc_width = $(document).width();
	console.log("row sjosa" + row_width);
	console.log("width" + width);
	console.log("dociwhdh" + doc_width);
	if (width < 650) {
		$('#screenbg').find('.search_big').text("");
		$('.search_index').css('padding-top', '15px')
	} else {
		$('#screenbg').find('.search_big').text("Search");
		$('.search_index').css('padding-top', '30px');
	}

	$('.service-row').find('.col-sm-3').css('height', row_width);
	


	/* add review */
	$("#add-review ,#cancel-review").click(function(){
		$('#review-form').toggle();
	});




});