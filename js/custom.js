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
	  if ($(document).scrollTop() > 100) {
		$(".video-sidbar-content").addClass("fixed-class");
	  } else {
		$(".video-sidbar-content").removeClass("fixed-class");
	  }
	});
  });
  //Video inner detil  pages

  $(document).ready(function() {
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 200) {
		$(".video-sidbar-content2").addClass("fixed-class2");
	  } else {
		$(".video-sidbar-content2").removeClass("fixed-class2");
	  }	  
	}); 
  });

  //Slider JS Starts 


  //Filter dropdown
  $(document).ready(function() {
	 $(".filter-section").click(function(){
		 $(".filter-content").toggle();
	 })
  });
  $(document).mouseup(function(e) 
{
    var container = $(".filter-content");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});

  