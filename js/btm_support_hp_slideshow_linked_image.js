// Slideshow

if (Drupal.jsEnabled) {
  $(document).ready(function() {
    if ($("#block-views-frontpage_slideshow-block_1 .view-content ul").length) {
      $("#block-views-frontpage_slideshow-block_1 .view-content ul").cycle({
        fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
        speed:  	1000,
        timeout:  5000
      });
    }
  });
}
