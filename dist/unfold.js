"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var unfold=function(a,b){var c=a(b);return Array.isArray(c)?[c[0]].concat(unfold(a,c[1])):[]};exports.default=unfold;