var antoniojunyor = antoniojunyor || {};

antoniojunyor.general = (function() {
  'user strict'

  var config = {
    selectors: {
      header: '.aj-header'
    }
  };

  function init() {
    defTotalHeight();
    startParallax();
  }

  function defTotalHeight() {
    var resize_height = document.querySelector(config.selectors.header).style.height = window.innerHeight + 'px';
    resize_height;

    window.onresize = function() {
      resize_height;
    }
  };

  function startParallax() {
    if(window.innerWidth > 992) {
      parallaxHeader();
    }
  };

  function parallaxHeader() {
    $(config.selectors.header).each(function() {

      $(window).scroll(function() {
        var yPos = -($(this).scrollTop() / 5);
        var bgPos = '0 ' + (-500 + yPos) + 'px';

        $(config.selectors.header).css('background-position', bgPos);
      });
    });
  };

  return {
    init: init
  }

}());
