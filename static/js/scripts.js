var channel_landing_height = $("#channel_landing .player").height();
$(".player_container, #channel_landing .listing").height(channel_landing_height);

// jQuery(window).load(function() {
// });

$(document).ready(function() {
 
  $(".video-slider").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 5,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,4]
      itemsTablet : [768,3]
      itemsMobile : [479,2]
 
  });
  $(".chan-slider").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 5,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,4]
      itemsTablet : [768,3]
      itemsMobile : [479,2]
 
  });
 
});
