"use strict";Object.defineProperty(exports,"__esModule",{value:true});var concatMap=function concatMap(f,a){var r=[];for(var i in a){r=r.concat(f(a[i]))}return r};exports.default=concatMap;