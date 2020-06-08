$(document).ready(function(){
	$(".overlay-arrow").fadeIn(2000);
	$(".overlay-text").fadeIn(2000);
	$(".profile-pic").fadeIn(2000);
	var overlay = document.getElementsByClassName("overlay-img")[0];
	var client = overlay.offsetTop;

	$(window).scroll(function(){
  		var height = window.scrollY;
		if(height > client - 140)
			whiteBGNavBar();
		else
			noBGNavBar();


		$('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
            	if($(this).attr('class') == 'card hideme')
                	$(this).animate({'opacity':'1', 'bottom':'20px'},1000); 
                if($(this).attr('id') == 'education')
                	$(this).fadeTo(2000, 1);
            }
        }); 

	});

	function whiteBGNavBar() {
		$(".navbar-custom").addClass("navbar-light");
		$(".navbar-custom").addClass("bg-light");
		$(".navbar-custom").addClass("navbar-custom-bg");
	}

	function noBGNavBar() {
		$(".navbar-custom").removeClass("navbar-light");
		$(".navbar-custom").removeClass("bg-light");
		$(".navbar-custom").removeClass("navbar-custom-bg");
	}

	$(".overlay-arrow").on("click", "a", function(e){
			e.preventDefault();
			var position = $($(this).attr("href")).offset().top;

			$("body, html").animate({
				scrollTop: position
			}, 1500, "linear");
 	});

 	$("#projects .card").click(function(){
			var modal = $('#myModal');
  			modal.css('display', 'block');
  			var desc = $(this).children('.description').html();
  			modal.children("#modal-content").html(desc);
			var span = document.getElementsByClassName("close")[0];
			span.onclick = function() { 
  				modal.css('display', 'none');
			}
 	});

 	
 	$(".navbar-nav").on("click", "a", function(e){
			e.preventDefault();
			var position = $($(this).attr("href")).offset().top;

			$("body, html").animate({
				scrollTop: position
			}, 1500, "linear");
 	});

 	$('body').scrollspy({ target: '#navbar-example' })

});


