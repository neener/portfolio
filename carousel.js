document.addEventListener('DOMContentLoaded', function () {
  
  var carouselElements = [
    document.getElementById('carousel1'),
    document.getElementById('carousel2'),
    document.getElementById('carousel3'),
    document.getElementById('carousel4'),
    document.getElementById('carousel5'),
  ];

  carouselElements.forEach(function (element) {
    new Flickity(element, {
      cellAlign: 'left',
      contain: true,
      wrapAround: false,
    });
  });
});
