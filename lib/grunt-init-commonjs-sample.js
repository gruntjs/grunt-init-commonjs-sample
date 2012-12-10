/*
 * grunt-init-commonjs-sample
 * https://github.com/gruntjs/grunt-init-commonjs-sample
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 */

(function(exports) {

  'use strict';

  exports.awesome = function() {
    return 'awesome';
  };

}(typeof exports === 'object' && exports || this));
