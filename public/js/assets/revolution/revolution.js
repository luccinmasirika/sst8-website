$(document).ready(function () {
  'use strict';

  //Revolution Slider
  jQuery('#rev_slider_1')
    .show()
    .revolution({
      /* Options are 'auto', 'fullwidth' or 'fullscreen' */
      sliderType: 'standard',
      jsFileLocation: 'revolution/js/',
      sliderLayout: 'fullscreen',
      dottedOverlay: 'none',
      delay: 9000,
      navigation: {
        keyboardNavigation: 'off',
        keyboard_direction: 'horizontal',
        mouseScrollNavigation: 'off',
        mouseScrollReverse: 'default',
        onHoverStop: 'off',
        bullets: {
          enable: true,
          hide_onmobile: false,
          style: 'bullet-bar',
          hide_onleave: false,
          direction: 'vertical',
          h_align: 'right',
          v_align: 'center',

          h_offset: 250,
          v_offset: 0,
          space: 5,
          tmp: '',
        },
      },
      responsiveLevels: [1200, 1024, 778, 480],
      visibilityLevels: [1200, 1024, 778, 480],
      gridwidth: [1200, 1024, 778, 480],
      gridheight: [600, 1000, 960, 320],
      lazyType: 'none',
      shadow: 0,
      spinner: 'off',
      stopLoop: 'off',
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: 'off',
      autoHeight: 'off',
      fullScreenAutoWidth: 'off',
      fullScreenAlignForce: 'off',
      fullScreenOffsetContainer: '',
      fullScreenOffset: '60px',
      hideThumbsOnMobile: 'off',
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: 'off',
        nextSlideOnWindowFocus: 'off',
        disableFocusListener: false,
      },
    });

  //Revolution Slider
  jQuery('#rev_slider_2')
    .show()
    .revolution({
      /* Options are 'auto', 'fullwidth' or 'fullscreen' */
      sliderType: 'standard',
      jsFileLocation: 'revolution/js/',
      sliderLayout: 'fullscreen',
      dottedOverlay: 'none',
      delay: 9000,
      navigation: {
        keyboardNavigation: 'off',
        keyboard_direction: 'horizontal',
        mouseScrollNavigation: 'off',
        mouseScrollReverse: 'default',
        onHoverStop: 'off',
        bullets: {
          enable: true,
          hide_onmobile: false,
          style: 'bullet-bar',
          hide_onleave: false,
          direction: 'horizontal',
          h_align: 'center',
          v_align: 'bottom',
          h_offset: 0,
          v_offset: 50,
          space: 15,
          tmp: '',
        },
      },
      responsiveLevels: [1140, 1024, 778, 480],
      visibilityLevels: [1140, 1024, 778, 480],
      gridwidth: [1140, 1024, 778, 480],
      gridheight: [2000, 1050, 960, 720],
      lazyType: 'none',
      shadow: 0,
      spinner: 'off',
      stopLoop: 'off',
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: 'off',
      autoHeight: 'off',
      fullScreenAutoWidth: 'off',
      fullScreenAlignForce: 'off',
      fullScreenOffsetContainer: '',
      fullScreenOffset: '60px',
      hideThumbsOnMobile: 'off',
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: 'off',
        nextSlideOnWindowFocus: 'off',
        disableFocusListener: false,
      },
    });
});
