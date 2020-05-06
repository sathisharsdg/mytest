//Custom Js goes here

$(document).ready(function(){
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function(){
		$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
	});
	
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
	}).on('hide.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 50) {
		$(".video-sidbar-content").addClass("fixed-class");
	  } else {
		$(".video-sidbar-content").removeClass("fixed-class");
	  }
	});
  });