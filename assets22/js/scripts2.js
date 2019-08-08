jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.top-content').backstretch("https://vignette.wikia.nocookie.net/defenseoftheancients/images/1/1f/12_Dota2-Timbersaw.jpg/revision/latest?cb=20171122161209");
	
	
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();
	
});
