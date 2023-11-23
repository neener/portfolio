// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Get the carousel element
  var carouselElement1 = document.getElementById('carousel1');

  // Initialize Flickity
  var flky = new Flickity(carouselElement1, {
    // Flickity options go here
    // For example:
    cellAlign: 'left',
    contain: true,
    wrapAround: false,
    // Add more options as needed
  });

  var carouselElement2 = document.getElementById('carousel2');
  var flky2 = new Flickity(carouselElement2, {
    cellAlign: 'left',
    contain: true,
    wrapAround: false,
  });

  var carouselElement3 = document.getElementById('carousel3');
  var flky3 = new Flickity(carouselElement3, {
    cellAlign: 'left',
    contain: true,
    wrapAround: false,
  });

  var carouselElement4 = document.getElementById('carousel4');
  var flky4 = new Flickity(carouselElement4, {
    cellAlign: 'left',
    contain: true,
    wrapAround: false,
  });

  var carouselElement5 = document.getElementById('carousel5');
  var flky5 = new Flickity(carouselElement5, {
    cellAlign: 'left',
    contain: true,
    wrapAround: false,
  });
});