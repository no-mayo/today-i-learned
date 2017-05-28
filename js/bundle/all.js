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
/* global Vue, firebase */
var db = firebase.database();

// our <new-learn-form> component

var newLearnForm = Vue.component('new-learn-form', {
  data: function data() {
    return {
      cleanNewLearnText: this.newLearnText.trim(),
      updatedStatus: this.status
    };
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

      db.ref('users/' + component.userUid + '/learns').push({
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
  props: ['newLearnText', 'status', 'userUid'],
  template: '\n    <form class="new-learn-form" @submit.prevent="saveNewLearn">\n      <input type="text" :placeholder="randomLearn()" autoFocus required v-model="cleanNewLearnText">\n      <p>{{ updatedStatus }}</p>\n      <input type="submit" value="Save">\n    </form>\n  '
});

exports.default = newLearnForm;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  apiKey: "AIzaSyCAZmqm5ADWiJaS3RVrnyc9a9_6eJREwwg",
  authDomain: "today-i-learned-5e095.firebaseapp.com",
  databaseURL: "https://today-i-learned-5e095.firebaseio.com",
  projectId: "today-i-learned-5e095",
  storageBucket: "today-i-learned-5e095.appspot.com",
  messagingSenderId: "691472609212"
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _firebaseConfig = __webpack_require__(19);

var _firebaseConfig2 = _interopRequireDefault(_firebaseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global Vue, firebase */

// instruct webpack to do Sass compilation
__webpack_require__(1);

// initialise Firebase

firebase.initializeApp(_firebaseConfig2.default);

// configure Firebase to use our chosen auth provider
var provider = new firebase.auth.TwitterAuthProvider();

// set a base database reference
var db = firebase.database();

// bring in our custom Vue component
__webpack_require__(0);

// initialise our Vue app with its initial state
var App = new Vue({
  beforeCreate: function beforeCreate() {
    // the app should watch the user's auth state
    firebase.auth().onAuthStateChanged(function (user) {
      console.log('user status changed:', user);

      if (user) {
        // let our app know that we've got an authenticated user
        this.user = user;
        // set 2-way binding of the user's 'learns' list
        this.$bindAsArray('learnsList', db.ref('users/' + user.uid + '/learns'));
      } else {
        // no authed user - clear any previous user value
        this.user = {};
      }

      // hide the loading cover
      document.querySelector('.loading-cover').classList.add('hide');
    }.bind(this));
  },

  el: '#app',

  data: {
    learnsList: [],
    newLearnText: '',
    status: 'Type your new learning for today in the field above, and click "Save".',
    user: {}
  },

  methods: {
    removeLearn: function removeLearn(learn, event) {
      this.$firebaseRefs.learnsList.child(learn['.key']).remove();
      event.preventDefault();
    },

    signIn: function signIn(event) {
      firebase.auth().signInWithPopup(provider).then(function (result) {
        // on successful auth, we get the signed-in user's info
        firebase.database().ref('users/' + result.user.uid).update({
          displayName: result.user.displayName,
          uid: result.user.uid
        });
      }).catch(function (error) {
        // handle authentication errors
        var errorMessage = error.message;
        console.log('errorMessage:', errorMessage);
      });
      event.preventDefault();
    },

    signOut: function signOut(event) {
      var component = this;
      firebase.auth().signOut().then(function () {
        component.user = {};
      }).catch(function (error) {
        console.log('signout error:', error);
      });
      event.preventDefault();
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=all.js.map