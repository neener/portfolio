// document.addEventListener('DOMContentLoaded', function () {
//   var containers = document.querySelectorAll('.container.main');

//   containers.forEach(function (container) {
//     var carouselElement = container.querySelector('.carousel-cell');
//     new Flickity(carouselElement, {
//       cellAlign: 'left',
//       contain: true,
//       wrapAround: false,
//       fullscreen: true,
//     });
//   });
// });
var flkty = new Flickity('.carousel', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true, // Enable wrap-around behavior
  fullscreen: true,
  lazyLoad: 1
});