var antoniojunyor = antoniojunyor || {};

antoniojunyor.general = (function(){
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
    $(config.selectors.header).height(window.innerHeight);
  };

  function startParallax() {
    if(window.innerWidth > 998) {
      parallaxHeader();
    }
  };

  function parallaxHeader() {
    $(config.selectors.header).each(function() {

      $(window).scroll(function() {
        var yPos = -($(this).scrollTop() / 5);
        var bgPos = (-500 + yPos) + 'px';

        $(config.selectors.header).css('background-position-y', bgPos);
      });
    });
  };

  return {
    init: init
  }

}());
