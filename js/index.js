/* global Vue */

// import our database and set a base reference
import database from './firebase-database.js';
const userRef = database.ref('users/testUser');

// instruct webpack to do Sass compilation
require('../sass/style.scss');

// bring in our custom Vue component
require('../js/components/new-learn-form.js');

// initialise our Vue app with its initial state
const App = new Vue({
  el: '#app',
  data: {
    learnsList: [],
    newLearnText: '',
    status: 'Type your new learning for today in the field above, and click "Save".'
  },
  firebase: {
    learnsList: {
      source: userRef,
      cancelCallback: function(error) {
        // handle any errors in listening to the userRef
        console.log('cancelCallback(), error.message:', error.message);
        document.querySelector('.loading-error').innerHTML = 'An error occurred. Please refresh the page to try again.';
      },
      readyCallback: function(snapshot) {
        // respond to successful fetch from userRef
        document.querySelector('.loading-cover').classList.add('hide');
      }
    }
  },
  methods: {
    removeUser: function(learn) {
      userRef.child(learn['.key']).remove();
    }
  }
});