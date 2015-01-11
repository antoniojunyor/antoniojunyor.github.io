var antoniojunyor = (function() {
  'use strict';

  function init() {
    antoniojunyor.general.init();
  }

  return {
    init: init
  };

}());

var aj = antoniojunyor;

$(window).load(function() {
  antoniojunyor.init();
});
