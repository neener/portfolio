// Function to create a carousel
function createCarousel(containerId, items) {
  const contentContainer = document.querySelector(`#${containerId} .carouselContent`);
  const prevButton = document.querySelector(`#${containerId} .prevButton`);
  const nextButton = document.querySelector(`#${containerId} .nextButton`);

  let currentItemIndex = 0;

  function updateContent() {
      const currentItem = items[currentItemIndex];
      contentContainer.innerHTML = '';

      if (currentItem.type === 'image') {
          const img = document.createElement('img');
          img.src = currentItem.src;
          img.alt = 'Image Carousel';
          contentContainer.appendChild(img);
      } else if (currentItem.type === 'youtube') {
          const iframe = document.createElement('iframe');
          iframe.width = '560';
          iframe.height = '315';
          iframe.src = currentItem.src;
          iframe.frameBorder = '0';
          iframe.allowFullscreen = true;
          contentContainer.appendChild(iframe);
      }
  }

  prevButton.addEventListener('click', () => {
      currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
      updateContent();
  });

  nextButton.addEventListener('click', () => {
      currentItemIndex = (currentItemIndex + 1) % items.length;
      updateContent();
  });

  // Initialize the carousel with the first item
  updateContent();
}

 // Define image arrays for each carousel
const carousel1Items = [
  { type: 'image', src: 'imgs/heat-dao/final-1.jpg' },
  { type: 'image', src: 'imgs/heat-dao/from-behind.jpg' },
  { type: 'image', src: 'imgs/heat-dao/idle-page.jpg' },
  { type: 'image', src: 'imgs/heat-dao/landing-page.jpg' },
  { type: 'image', src: 'imgs/heat-dao/menu-closed.jpg' },
  { type: 'image', src: 'imgs/heat-dao/menu-open.jpg' },
  { type: 'image', src: 'imgs/heat-dao/single-dance.jpg' },
  { type: 'image', src: 'imgs/heat-dao/solo.jpg' },
  { type: 'youtube', src: 'https://www.youtube.com/embed/PNlfK9HnxgI' },
];

const carousel2Items = [
  { type: 'image', src: 'imgs/zing/home.jpg' },
  { type: 'image', src: 'imgs/zing/zingmagazine.jpg' },
  { type: 'image', src: 'imgs/zing/zingmagazine-issue.jpg' },
  { type: 'image', src: 'imgs/zing/single-issue.jpg' },
  { type: 'image', src: 'imgs/zing/paypal-buy.jpg' },
  { type: 'image', src: 'imgs/zing/zingblog.jpg' },
  { type: 'image', src: 'imgs/zing/zingrecommends.jpg' },
  { type: 'image', src: 'imgs/zing/zingparty.jpg' },
  { type: 'image', src: 'imgs/zing/zingvideos.jpg' },
  { type: 'image', src: 'imgs/zing/zingpoop.jpg' },
  { type: 'image', src: 'imgs/zing/about.jpg' },
  { type: 'image', src: 'imgs/zing/contact.jpg' },
];

 // Create carousels with different items
 createCarousel('carousel1', carousel1Items);
 createCarousel('carousel2', carousel2Items);