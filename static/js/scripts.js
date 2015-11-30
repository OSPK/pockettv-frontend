if ($(window).width()>768) {
    var channel_landing_height = $("#channel_landing .player").height();
    $(".player_container, #channel_landing .listing").height(channel_landing_height);
};
// jQuery(window).load(function() {
// });

$(document).ready(function() {
 
  $(".video-slider").owlCarousel({
 
      autoPlay: false, //Set AutoPlay to 3 seconds
      pagination: false,
      items : 5.3,
      itemsDesktop : [1199,5.3],
      itemsDesktopSmall : [979,4.3],
      itemsTablet : [768,3.3],
      itemsMobile : [479,2.3]
 
  });
  $(".chan-slider").owlCarousel({
 
      autoPlay: false, //Set AutoPlay to 3 seconds
      pagination: false,
      items : 5.3,
      itemsDesktop : [1199,5.3],
      itemsDesktopSmall : [979,4.3],
      itemsTablet : [768,3.3],
      itemsMobile : [479,2.3]
 
  });
 
});
