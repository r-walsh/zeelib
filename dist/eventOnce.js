"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var eventOnce=function(a,b,c){var d=function f(g){g.target.removeEventListener(b,d),c()};a.addEventListener(b,d)};exports.default=eventOnce;