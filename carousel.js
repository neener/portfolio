document.addEventListener('DOMContentLoaded', function () {
  // Initialize Tiny Slider for each carousel
  var carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(function (carousel, index) {
    var slider = tns({
      container: carousel,
      items: 1,
      slideBy: 'page',
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      controlsContainer: carousel.nextElementSibling, // Use nextElementSibling for controls
      nav: false,
      arrowKeys: true,
      autoHeight: true,
      onInit: function (info, eventName) {
        // Force refresh the slider after initialization
        setTimeout(function () {
          slider.refresh();
        }, 0);
      },
    });
    
    // Add unique ID to each slider to handle multiple sliders
    var sliderId = 'slider' + (index + 1);
    carousel.setAttribute('data-slider-id', sliderId);
  });
});
