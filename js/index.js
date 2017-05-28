/* global Vue, firebase */

// instruct webpack to do Sass compilation
require('../sass/style.scss');

// initialise Firebase
import config from './firebase-config.js';
firebase.initializeApp(config);

// configure Firebase to use our chosen auth provider
let provider = new firebase.auth.TwitterAuthProvider();

// set a base database reference
const db = firebase.database();

// bring in our custom Vue component
require('../js/components/new-learn-form.js');

// initialise our Vue app with its initial state
const App = new Vue({
  beforeCreate: function() {
    // the app should watch the user's auth state
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('user status changed:', user);
      
      if (user) {
        // let our app know that we've got an authenticated user
        this.user = user;
        // set 2-way binding of the user's 'learns' list
        this.$bindAsArray('learnsList', db.ref(`users/${user.uid}/learns`));
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
    user: {},
  },
  
  methods: {
    removeLearn: function(learn, event) {
      this.$firebaseRefs.learnsList.child(learn['.key']).remove();
      event.preventDefault();
    },
    
    signIn: function(event) {
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // on successful auth, we get the signed-in user's info
        firebase.database().ref(`users/${result.user.uid}`).update({
          displayName: result.user.displayName,
          uid: result.user.uid
        });
      }).catch(function(error) {
        // handle authentication errors
        let errorMessage = error.message;
        console.log('errorMessage:', errorMessage);
      });
      event.preventDefault();
    },
    
    signOut: function(event) {
      let component = this;
      firebase.auth().signOut().then(function() {
        component.user = {};
      }).catch(function(error) {
        console.log('signout error:', error);
      });
      event.preventDefault();
    }
  }
});