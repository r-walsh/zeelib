'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _zipWith=require('./zipWith'),_zipWith2=_interopRequireDefault(_zipWith),_invoke=require('./invoke'),_invoke2=_interopRequireDefault(_invoke);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var zipThen=function(a,b){return function(){for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];return a.apply(a,(0,_zipWith2.default)(_invoke2.default,b,d))}};exports.default=zipThen;