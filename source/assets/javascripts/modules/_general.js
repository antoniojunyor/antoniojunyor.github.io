var antoniojunyor = antoniojunyor || {};

antoniojunyor.general = (function(){
  'user strict'

  function init() {
    defTotalHeight();
  }

  function defTotalHeight() {
    $('.aj-header').height(window.innerHeight);
  };

  return {
    init: init
  }

}());
