'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var fixWindowsSlashes=function(a){var b=/^\\\\\?\\/.test(a),c=/[^\x00-\x80]+/.test(a);return b||c?a:a.replace(/\\/g,'/')};exports.default=fixWindowsSlashes;