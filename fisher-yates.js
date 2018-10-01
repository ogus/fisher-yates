(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.FisherYates = factory();
  }
}(this, function () {
  "use strict";

  /**
   * Fisher-Yates shuffling algorithm
   * Compute an in-place shuffle of the elements contained in an Array
   * 
   * @param {Array} array Input data
   * @return {Array} Shuffled array
   */
  function shuffle(array) {
    if(!Array.isArray(array)) {
      return array;
    }

    let i = 0, j = 0, t = null;
    for (i = array.length-1; i > 0; i--) {
      // Compute random index
      j = Math.floor(Math.random() * (i+1));

      // Swap elements i & j
      t = array[i];
      array[i] = array[j];
      array[j] = t;
    }
    return array;
  }

  // Object definition
  var FisherYates = {
    shuffle: function (array) {
      return suffle(array);
    },

    suffle_async: function (array) {
      return new Promise(function(resolve, reject) {
        resolve(shuffle(array));
      });
    }
  };

  // Worker message
  if (typeof self !== "undefined") {
    self.onmessage = function(e) {
      let array = shuffle(e.data);
      postMessage({array: array});
    }
  }

  return FisherYates;
}));
