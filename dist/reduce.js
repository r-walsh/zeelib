'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _curry=require('./curry'),_curry2=_interopRequireDefault(_curry);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var reduce=(0,_curry2.default)(function(a,b,c){for(var d=b,e=0;e<c.length;e++)d=a(d,c[e]);return d});exports.default=reduce;