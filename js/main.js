$(document).ready(function() {
  // with minimal configuration and default setting
  var slideImages = [];
  for (var i = 0; i < 5; i++) {
    slideImages.push({
      src: 'https://unsplash.it/' + (1366 + i) + '/' + (768 + i)
    })
  }
  $('.jR3DCarouselGalleryDefault').jR3DCarousel({
  	width: 470,
  	height: 272,
    slides: slideImages
  });

  // Or with options
  $('.jR3DCarouselGalleryCustom').jR3DCarousel({
    width: 470,
    /* largest allowed width */
    height: 272,
    /* largest allowed height */
    slideLayout: 'fill',
    /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
    animation: 'slide3D',
    /* slide | scroll | fade | zoomInSlide | zoomInScroll */
    animationCurve: 'ease',
    animationDuration: 1700,
    animationInterval: 2000,
    rotationDirection: 'ltr',
    slideClass: 'jR3DCarouselCustomSlide',
    autoplay: false,
    onSlideShow: slideShownCallback,
    /* callback when Slide show event occurs */
    navigation: 'circles' /* circles | squares */ ,
    perspective: 1200
  });
  function slideShownCallback($slide) {
    console.log("Slide shown: "+$slide.find('img').attr('src'));
  }
});
