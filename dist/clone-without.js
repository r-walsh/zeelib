'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _copyWithout=require('./copy-without'),_copyWithout2=_interopRequireDefault(_copyWithout);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var cloneWithout=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return _copyWithout2.default.apply(void 0,[{},a,_toConsumableArray(c)])};exports.default=cloneWithout;