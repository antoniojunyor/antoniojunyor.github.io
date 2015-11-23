var antoniojunyor = antoniojunyor || {};

antoniojunyor.general = (function() {
  'use strict';

  var $header = $('.aj-header');

  function init() {
    startParallax();
  }

  function startParallax() {
    if (window.innerWidth > 991) {
      parallaxHeader();
    }
  };

  function parallaxHeader() {
    $header.each(function() {
      $(window).scroll(function() {
        var yPos = -($(this).scrollTop() / 5);
        var bgPos = '0 ' + (-500 + yPos) + 'px';

        $header.css('background-position', bgPos);
      });
    });
  };

  return {
    init: init
  }

}());
