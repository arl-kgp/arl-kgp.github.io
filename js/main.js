$.LoadingOverlay("show",{
    color       : "rgba(255, 255, 255, 1)", 
    image       : "ark.svg",
    fade            : [0, 200],
    imagePosition   : "center center",
    maxSize         : "200px",
    minSize         : "20px",
    resizeInterval  : 50,
    size            : "50%" ,
    zIndex          : 30000
});

// Hide it after page loads completely
$(window).load(function() {
    $.LoadingOverlay("hide");
    new WOW().init();
});

// jQuery to collapse the navbar on scroll
// function collapseNavbar() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// }

// $(window).scroll(collapseNavbar);
// $(document).ready(collapseNavbar);

// // jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
//   if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
//     $('.navbar-toggle:visible').click();
//   }
// });

var $container = $('.isotopeWrapper');
// // initialize isotope

// var $grid = $container.isotope({
//     itemSelector: '.isotopeItem',
//     layoutMode: 'fitRows',
//     // resizable: true, // disable normal resizing
// });

// $grid.imagesLoaded().progress( function() {
//     $grid.isotope('layout');
// });

$('#filter a').click(function(){
    $('#filter li').removeClass('active');
    $(this).parent().addClass('active');
    var selector = $(this).attr('data-filter');
    $container.isotope({
        filter: selector,
    });
    return false;
});