var channel_landing_height = $("#channel_landing .player").height();
$(".player_container, #channel_landing .listing").height(channel_landing_height);

// jQuery(window).load(function() {
// });

$(document).ready(function() {
    $('.video-slider').slick({
        centerPadding: '60px',
        slidesToShow: 4,
        infinite: true,
        draggable: true,

        responsive: [{
            breakpoint: 1200,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 320,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });

    $('.chan-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        variableWidth: true,
        draggable: true,
        infinite: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
            }
        }, {
            breakpoint: 992,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 4
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        }, {
            breakpoint: 320,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    });
});
