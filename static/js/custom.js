$(function() {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 65)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 65
    })

    // Fit Text Plugin for Main Header
    $("#caption-text").fitText(
        1.4, {
            minFontSize: '5px',
            maxFontSize: '26px'
        } );

var nt_example1 = $('#upcoming-ticker').newsTicker({
                row_height: 70,
                max_rows: 8,
                duration: 3000000,
                prevButton: $('#upcoming-ticker-prev'),
                nextButton: $('#upcoming-ticker-next'),
            });
   
$('.dropdown').hover(function() {
	$('.dropdown-toggle').dropdown("toggle");
}, function() {
$('.dropdown-toggle').dropdown("toggle");
});

 // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

 // Initialize WOW.js Scrolling Animations
    new WOW().init();
});