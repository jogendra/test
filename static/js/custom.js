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

$("header").bgswitcher({
  images: ["/static/img/header.jpg", "/static/img/header2.jpg", "/static/img/header3.jpg", "/static/img/header4.jpg", "/static/img/header5.jpg", "/static/img/header6.jpg"],
  effect: "fade",
  interval: 4000,
  duration: 1000
});
    // Fit Text Plugin for Main Header
    $("#caption-text").fitText(
        1.4, {
            minFontSize: '5px',
            maxFontSize: '26px'
        } );

var nt_example1 = $('#upcoming-ticker').newsTicker({
                row_height: 65,
                max_rows: 5,
                duration: 10000,
                prevButton: $('#upcoming-ticker-prev'),
                nextButton: $('#upcoming-ticker-next'),
            });

$('#corner').hover(function() {
	/*$('#sntc_corner').dropdown("toggle");*/
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
}, function() {
/*$('#sntc_corner').dropdown("toggle");*/
  $(this).find('.dropdown-menu').first().stop(true, true).delay(80).slideUp();
});

$('#snapshot').hover(function() {
	/*$('#sntc_corner').dropdown("toggle");*/
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideDown();
}, function() {
/*$('#sntc_corner').dropdown("toggle");*/
  $(this).find('.dropdown-menu').first().stop(true, true).delay(80).slideUp();
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
