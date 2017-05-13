/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Vue */

// instruct webpack to do Sass compilation
__webpack_require__(0);

// bring in our custom Vue component
__webpack_require__(6);

// initialise our Vue app with its initial state
var App = new Vue({
  el: '#app',
  data: {
    learnsList: [{ id: 0, text: 'Test learn 1' }, { id: 1, text: 'Test learn 2' }, { id: 2, text: 'Test learn 3' }],
    newLearnText: '',
    status: 'Type your new learning for today in the field above, and click "Save".'
  }
});

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global Vue */

// our <new-learn-form> component

var newLearnForm = Vue.component('new-learn-form', {
  data: function data() {
    return {
      cleanNewLearnText: this.newLearnText.trim(),
      updatedStatus: this.status
    };
  },
  methods: {
    getRandomLearn: function getRandomLearn() {
      var learns = ['Pythagoras\' theorem', 'how to find a manta ray', 'the Portuguese word for \'jump\''];
      var random = Math.floor(Math.random() * learns.length);
      return learns[random];
    },
    saveNewLearn: function saveNewLearn() {
      console.log('saveNewLearn()');
      console.log('this.cleanNewLearnText?', this.cleanNewLearnText);
      this.updatedStatus = 'Saving...';
    }
  },
  props: ['newLearnText', 'status'],
  template: '\n    <form class="new-learn-form" @submit.prevent="saveNewLearn">\n      <input type="text" :placeholder="getRandomLearn()" autoFocus required v-model="cleanNewLearnText">\n      <p>{{ updatedStatus }}</p>\n      <input type="submit" value="Save">\n    </form>\n  '
});

exports.default = newLearnForm;

/***/ })
/******/ ]);
//# sourceMappingURL=all.js.map