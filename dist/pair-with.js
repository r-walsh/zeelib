"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var pairWith=function(a){return function(b){return 2>a.length?[]:[b(a[0],a[1]),pairWith(a.slice(1),b)]}};exports.default=pairWith;