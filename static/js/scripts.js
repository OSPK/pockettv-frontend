var device_width = $(window).width();
// if (device_width > 768) {
//     var channel_landing_height = $("#channel_landing .player").height();
//     $(".player_container, #channel_landing .listing").height(channel_landing_height);
// };

jQuery(window).load(function() {
    
});

$(document).ready(function() {
    
    $(".video-slider").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        pagination: false,
        navigation: true,
        navigationText: ["<i class='glyphicon glyphicon-chevron-left'></i>","<i class='glyphicon glyphicon-chevron-right'></i>"],
        items: 4.3,
        itemsDesktop: [1199, 4.3],
        itemsDesktopSmall: [979, 3.3],
        itemsTablet: [768, 3.3],
        itemsMobile: [479, 2.3]

    });
    $(".chan-slider").owlCarousel({

        autoPlay: false, //Set AutoPlay to 3 seconds
        pagination: false,
        navigation: true,
        navigationText: ["<i class='glyphicon glyphicon-chevron-left'></i>","<i class='glyphicon glyphicon-chevron-right'></i>"],
        items: 5.3,
        itemsDesktop: [1199, 5.3],
        itemsDesktopSmall: [979, 4.3],
        itemsTablet: [768, 3.3],
        itemsMobile: [479, 2.3]

    });

});

//Search Bar
$(function () {
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});

// $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#sidebar-wrapper").toggleClass("toggled");
// });
$( "#menu-toggle" ).on( "click", function() {
  $("#sidebar-wrapper").toggleClass("toggled");
});