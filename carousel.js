// Function to preload images and YouTube thumbnails
function preloadMedia(items) {
  items.forEach((item) => {
      if (item.type === 'image') {
          const img = new Image();
          img.src = item.src;
      } else if (item.type === 'youtube') {
          const thumbnailUrl = `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`;
          const img = new Image();
          img.src = thumbnailUrl;
      }
  });
}

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
      const container = document.createElement('div');
      container.classList.add('image-placeholder'); // Add the placeholder class

      const img = document.createElement('img');
      img.alt = 'Image Carousel';
      img.loading = 'lazy'; // Add lazy loading attribute
      img.src = currentItem.src;
      img.onload = () => {
        // console.log('Image loaded:', currentItem.src);
        img.onclick = function () {
          openModal(currentItem);
        };
      };
      contentContainer.appendChild(img);
    } else if (currentItem.type === 'youtube') {
      const iframe = document.createElement('iframe');
      iframe.width = '560';
      iframe.height = '315';
      iframe.src = `https://www.youtube.com/embed/${currentItem.videoId}`;
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
  { type: 'youtube', videoId: 'PNlfK9HnxgI' },
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

const carousel3Items = [
  { type: 'image', src: 'imgs/cyberfem/scroll.jpg' },
  { type: 'image', src: 'imgs/cyberfem/home.jpg' },
  { type: 'image', src: 'imgs/cyberfem/add-text-to-dls.jpg' },
  { type: 'image', src: 'imgs/cyberfem/downloads.jpg' },
  { type: 'image', src: 'imgs/cyberfem/save-downloads.jpg' },
  { type: 'image', src: 'imgs/cyberfem/about.jpg' },
  { type: 'image', src: 'imgs/cyberfem/images.jpg' },
  { type: 'image', src: 'imgs/cyberfem/image-enlarge.jpg' },
  { type: 'image', src: 'imgs/cyberfem/collections.jpg' },
  { type: 'image', src: 'imgs/cyberfem/search.jpg' },
  { type: 'image', src: 'imgs/cyberfem/search-results.jpg' },
];

const carousel4Items = [
  { type: 'image', src: 'imgs/ceruzzi/home.jpg' },
  { type: 'image', src: 'imgs/ceruzzi/work.jpg' },
  { type: 'image', src: 'imgs/ceruzzi/work-expanded.jpg' },
  { type: 'image', src: 'imgs/ceruzzi/blog.jpg' },
  { type: 'image', src: 'imgs/ceruzzi/cv.jpg' },
  { type: 'image', src: 'imgs/ceruzzi/copy-email.jpg' },
];

const carousel5Items = [
  { type: 'image', src: 'imgs/mirror/selfie2.jpg' },
  { type: 'image', src: 'imgs/mirror/mirror-ex.jpg' },
  { type: 'image', src: 'imgs/mirror/selfie-mirror.jpg' },
];

// Preload images for each carousel
preloadMedia(carousel1Items.concat(carousel2Items, carousel3Items, carousel4Items, carousel5Items));

 // Create carousels with different items
 createCarousel('carousel1', carousel1Items);
 createCarousel('carousel2', carousel2Items);
 createCarousel('carousel3', carousel3Items);
 createCarousel('carousel4', carousel4Items);
 createCarousel('carousel5', carousel5Items);

 // Modal functions
 const modal = document.getElementById('imageModal');
 const enlargedImg = document.getElementById('enlargedImg');

 function openModal(item) {
  enlargedImg.innerHTML = ''; // Clear any previous content

  if (item.type === 'image') {
      const img = new Image();
      img.src = item.src;
      img.onload = function() {
          const aspectRatio = img.naturalWidth / img.naturalHeight;
          const maxWidth = window.innerWidth * 0.9;
          const maxHeight = maxWidth / aspectRatio;
          img.style.maxWidth = '100%';
          img.style.maxHeight = `${maxHeight}px`;
          enlargedImg.appendChild(img);
          modal.style.display = 'block';
      };
  } else if (item.type === 'youtube') {
      const youtubeThumbnailUrl = `https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`;
      const youtubeThumbnail = new Image();

      youtubeThumbnail.onload = function() {
          enlargedImg.appendChild(youtubeThumbnail);
          modal.style.display = 'block';
      };

      youtubeThumbnail.onerror = function() {
          console.error('Error loading YouTube thumbnail.');
          // You can display a default image or show an error message here.
      };

      youtubeThumbnail.src = youtubeThumbnailUrl;
      youtubeThumbnail.alt = 'YouTube Video Thumbnail';
  }
}

window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
};

