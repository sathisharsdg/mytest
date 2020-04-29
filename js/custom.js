//Custom Js goes here

   $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('#navbarText').addClass('fixed-class');
			 }
			 else {
				 $('#navbarText').removeClass('fixed-class');
			 }
		});
	});