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
        navPosition: 'bottom',
        arrowKeys: true,
        preventActionWhenRunning: true,
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

  // Add event listener for arrow keys
  document.addEventListener('keydown', function (e) {
    // Check if arrow key is pressed
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      // Find the carousel in focus
      var focusedCarousel = document.querySelector('.carousel-container:focus');

      // Check if there is a focused carousel
      if (focusedCarousel) {
        // Find the corresponding slider instance
        var sliderId = focusedCarousel.getAttribute('data-slider-id');
        var slider = tns.instances[sliderId];

        // Check if the slider instance exists
        if (slider) {
          // Prevent default arrow key behavior
          e.preventDefault();

          // Navigate the slider based on the arrow key pressed
          if (e.key === 'ArrowLeft') {
            slider.goTo('prev');
          } else if (e.key === 'ArrowRight') {
            slider.goTo('next');
          }
        }
      }
    }
  });
});
