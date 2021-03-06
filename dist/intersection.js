"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// @flow

/**
 * Get the intersection of two arrays
 * @example
 * intersection([ 1, 2 ], []) // => []
 * intersection([ 1, 2, 3 ], [1, 2]) // => [ 1, 2 ]
 */

var intersection = function intersection(xs /*: any[]*/, ys /*: any[]*/) /*: any[]*/ {
  return [].concat(_toConsumableArray(new Set(xs.filter(function (el) {
    return ys.includes(el);
  }))));
};

exports.default = intersection;