var antoniojunyor = antoniojunyor || {};

antoniojunyor.general = (function() {
  'user strict'

  var config = {
    selectors: {
      header: '.aj-header'
    }
  };

  function init() {
    startParallax();
  }

  function startParallax() {
    if (window.innerWidth > 991) {
      parallaxHeader();
    }
  };

  function parallaxHeader() {
    $(config.selectors.header).each(function() {

      $(window).scroll(function() {
        var yPos = -($(this).scrollTop() / 5);
        var bgPos = '0 ' + (0 - yPos) + '%';

        $(config.selectors.header).css('background-position', bgPos);
      });
    });
  };

  return {
    init: init
  }

}());
