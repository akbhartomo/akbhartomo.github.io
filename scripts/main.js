(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var rellax = new Rellax('.rellax', {
    center: false,
    vertical: true,
    horizontal: false
  });
};

},{}],2:[function(require,module,exports){
'use strict';

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bootstrapFunction = function () {

  var rellax = function rellax() {
    (0, _components2.default)();
  };
  // Each function want you to create, make it them to be variable functions
  // ES6 supports
  var init = function init() {
    rellax();
    // Grab the functions you want activate
  };

  // Here is to render the function from init variable
  return {
    init: init
  };
}();

bootstrapFunction.init();

},{"./components":1}]},{},[2])

//# sourceMappingURL=bundle.js.map
