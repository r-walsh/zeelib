"use strict";Object.defineProperty(exports,"__esModule",{value:true});function curry2(f){function curried(a,b){switch(arguments.length){case 0:return curried;case 1:return function(b){return f(a,b)};default:return f(a,b);}}return curried}exports.default=curry2;