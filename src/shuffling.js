(function (root, factory) {
  if (typeof define === 'function' && define.amd) { define([], factory); }
  else if (typeof module === 'object' && module.exports) { module.exports = factory(); }
  else { root.Shuffling = factory(); }
}(this, function () {
  'use strict';

  /**
   * Fisher-Yates shuffling algorithm
   * Compute an in-place shuffle of the elements contained in a sequence
   *
   * @param sequence Input sequence of array-like or iterable object
   * @return {Array} Shuffled array
   */
  function shuffle(sequence) {
    let result = Array.from(sequence);
    let i = 0, j = 0, t = null;
    for (i = result.length-1; i > 0; i--) {
      // Compute random index
      j = Math.floor(Math.random() * (i+1));
      // Swap elements i & j
      t = result[i];
      result[i] = result[j];
      result[j] = t;
    }
    return result;
  }

  // Object definition
  var Shuffling = {
    shuffle: function (sequence) {
      return suffle(sequence);
    },

    suffle_async: function (sequence) {
      return new Promise(function(resolve, reject) {
        let result = shuffle(sequence);
        resolve(result);
      });
    }
  };

  // Worker message
  if (typeof self !== "undefined") {
    self.onmessage = function(e) {
      let result = shuffle(e.data);
      postMessage(result);
    }
  }

  return Shuffling;
}));
