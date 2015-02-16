var antoniojunyor = antoniojunyor || {};

antoniojunyor.general = (function(){
  'user strict'

  function init() {
    defTotalHeight();
    parallaxHeader();
  }

  function defTotalHeight() {
    $('.aj-header').height(window.innerHeight);
  };

  function parallaxHeader() {
    $('.aj-header').each(function() {
      var $obj = $(this);

      $(window).scroll(function() {
        var yPos = -($(window).scrollTop() / 5);

        if (window.innerWidth <= 998) {
          var bgPos = yPos + 'px';
        } else {
          var bgPos = (-500 + yPos) + 'px';
        };

        $obj.css('background-position-y', bgPos);
      });
    });
  }

  return {
    init: init
  }

}());
