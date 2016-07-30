$(document).ready(function(){

	$(".tab_contenido").hide();
	$(".tabs li:first a").addClass("active");
	$(".tab_contenido:first").show();

	$(".tabs li a").click(function() {

		$(".tabs li a").removeClass("active");
		$(this).addClass("active");
		$(".tab_contenido").hide();

		var activeTab = $(this).attr("href");
		$(activeTab).fadeIn(500);
		return false;
	});

});