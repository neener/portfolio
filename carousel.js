document.addEventListener('DOMContentLoaded', function () {
  // Initialize Tiny Slider for each carousel
  var carousels = document.querySelectorAll('.carousel-container');

  carousels.forEach(function (carousel, index) {
    requestAnimationFrame(function () {
      var slider = tns({
        container: carousel,
        items: 1,
        slideBy: 'page',
        mouseDrag: true,
        swipeAngle: false,
        speed: 400,
        nav: true,
        arrowKeys: true,
        autoHeight: true,
        controlsContainer: document.getElementById('tns-controls' + (index + 1)), // Use the controls container
        onInit: function (info, eventName) {
          // Force refresh the slider after initialization
          slider.refresh();
        },
      });
      
      // Add unique ID to each slider to handle multiple sliders
      var sliderId = 'slider' + (index + 1);
      carousel.setAttribute('data-slider-id', sliderId);
    });
  });
});
