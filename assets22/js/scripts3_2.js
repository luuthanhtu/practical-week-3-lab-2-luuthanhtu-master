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
    $('.top-content').backstretch("https://cdn.vox-cdn.com/thumbor/Yr0OQPjKAAielFYXVYn1zhf5MiE=/0x0:783x559/1200x800/filters:focal(336x168:460x292)/cdn.vox-cdn.com/uploads/chorus_image/image/59678747/lion_cosmic_rare.0.png");
	
	
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
