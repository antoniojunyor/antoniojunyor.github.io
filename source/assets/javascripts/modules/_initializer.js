var antoniojunyor = (function() {
  'use strict';

  function fastInit() {
    antoniojunyor.general.init();
  }

  return {
    fastInit: fastInit
  };

}());

var aj = antoniojunyor;

$(document).ready(function() {
  antoniojunyor.fastInit();
});
