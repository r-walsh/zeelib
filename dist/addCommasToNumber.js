'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var addCommasToNumber=function(a){var b=a.toString().split('.');return b[0]=b[0].replace(/\B(?=(\d{3})+(?!\d))/g,','),b.join('.')};exports.default=addCommasToNumber;