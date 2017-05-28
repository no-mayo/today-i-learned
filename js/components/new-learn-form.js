/* global Vue */
import database from '../firebase-database.js';
const userRef = database.ref('users/testUser');

// our <new-learn-form> component

const newLearnForm = Vue.component('new-learn-form', {
  data: function() {
    return {
      cleanNewLearnText: this.newLearnText.trim(),
      updatedStatus: this.status
    };
  },
  firebase: {
    user: {
      source: userRef,
      cancelCallback: function(errMsg) {
        console.log('cancelCallback(), errMsg:', errMsg);
      },
      // readyCallback: function(snapshot) {
      //   console.log('readyCallback(), snapshot.val():', snapshot.val());
      // }
    }
  },
  methods: {
    randomLearn: function() {
      let learns = ['Pythagoras\' theorem', 'how to find a manta ray', 'the Portuguese word for \'jump\''];
      let random = Math.floor(Math.random() * learns.length);
      return learns[random];
    },
    saveNewLearn: function() {
      let component = this;
      component.updatedStatus = 'Saving...';
      
      userRef.push({
        createdAt: Math.floor(Date.now()/1000),
        learnText: this.cleanNewLearnText,
        updatedAt: Math.floor(Date.now()/1000)
      }, function(error) {
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
  template: `
    <form class="new-learn-form" @submit.prevent="saveNewLearn">
      <input type="text" :placeholder="randomLearn()" autoFocus required v-model="cleanNewLearnText">
      <p>{{ updatedStatus }}</p>
      <input type="submit" value="Save">
    </form>
  `
});

export default newLearnForm;