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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebaseDatabase = __webpack_require__(18);

var _firebaseDatabase2 = _interopRequireDefault(_firebaseDatabase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRef = _firebaseDatabase2.default.ref('users/testUser');

// our <new-learn-form> component

/* global Vue */
var newLearnForm = Vue.component('new-learn-form', {
  data: function data() {
    return {
      cleanNewLearnText: this.newLearnText.trim(),
      updatedStatus: this.status
    };
  },
  firebase: {
    user: {
      source: userRef,
      cancelCallback: function cancelCallback(errMsg) {
        console.log('cancelCallback(), errMsg:', errMsg);
      }
    }
  },
  methods: {
    randomLearn: function randomLearn() {
      var learns = ['Pythagoras\' theorem', 'how to find a manta ray', 'the Portuguese word for \'jump\'', 'an algorithm for sorting bubbles'];
      var randomIndex = Math.floor(Math.random() * learns.length);

      return learns[randomIndex];
    },
    saveNewLearn: function saveNewLearn() {
      var component = this;
      component.updatedStatus = 'Saving...';

      userRef.push({
        createdAt: Math.floor(Date.now() / 1000),
        learnText: this.cleanNewLearnText,
        updatedAt: Math.floor(Date.now() / 1000)
      }, function (error) {
        if (error) {
          component.updatedStatus = error;
        } else {
          component.cleanNewLearnText = '';
          component.placeholder = component.randomLearn();
          component.updatedStatus = 'Type your new learning for today in the field above, and click "Save".';
        }
      });
    }
  },
  props: ['newLearnText', 'status'],
  template: '\n    <form class="new-learn-form" @submit.prevent="saveNewLearn">\n      <input type="text" :placeholder="randomLearn()" autoFocus required v-model="cleanNewLearnText">\n      <p>{{ updatedStatus }}</p>\n      <input type="submit" value="Save">\n    </form>\n  '
});

exports.default = newLearnForm;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global firebase */

firebase.initializeApp({
  apiKey: "AIzaSyCAZmqm5ADWiJaS3RVrnyc9a9_6eJREwwg",
  authDomain: "today-i-learned-5e095.firebaseapp.com",
  databaseURL: "https://today-i-learned-5e095.firebaseio.com",
  projectId: "today-i-learned-5e095",
  storageBucket: "today-i-learned-5e095.appspot.com",
  messagingSenderId: "691472609212"
});

exports.default = firebase.database();

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _firebaseDatabase = __webpack_require__(18);

var _firebaseDatabase2 = _interopRequireDefault(_firebaseDatabase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRef = _firebaseDatabase2.default.ref('users/testUser');

// instruct webpack to do Sass compilation
/* global Vue */

// import our database and set a base reference
__webpack_require__(1);

// bring in our custom Vue component
__webpack_require__(0);

// initialise our Vue app with its initial state
var App = new Vue({
  el: '#app',
  data: {
    learnsList: [],
    newLearnText: '',
    status: 'Type your new learning for today in the field above, and click "Save".'
  },
  firebase: {
    learnsList: {
      source: userRef,
      cancelCallback: function cancelCallback(error) {
        // handle any errors in listening to the userRef
        console.log('cancelCallback(), error.message:', error.message);
        document.querySelector('.loading-error').innerHTML = 'An error occurred. Please refresh the page to try again.';
      },
      readyCallback: function readyCallback(snapshot) {
        // respond to successful fetch from userRef
        document.querySelector('.loading-cover').classList.add('hide');
      }
    }
  },
  methods: {
    removeUser: function removeUser(learn) {
      userRef.child(learn['.key']).remove();
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=all.js.map