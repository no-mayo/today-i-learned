/* global Vue */

// our <new-learn-form> component

const newLearnForm = Vue.component('new-learn-form', {
  data: function() {
    return {
      cleanNewLearnText: this.newLearnText.trim(),
      updatedStatus: this.status
    };
  },
  methods: {
    getRandomLearn: function() {
      let learns = ['Pythagoras\' theorem', 'how to find a manta ray', 'the Portuguese word for \'jump\''];
      let random = Math.floor(Math.random() * learns.length);
      return learns[random];
    },
    saveNewLearn: function() {
      console.log('saveNewLearn()');
      console.log('this.cleanNewLearnText?', this.cleanNewLearnText);
      this.updatedStatus = 'Saving...';
    }
  },
  props: ['newLearnText', 'status'],
  template: `
    <form class="new-learn-form" @submit.prevent="saveNewLearn">
      <input type="text" :placeholder="getRandomLearn()" autoFocus required v-model="cleanNewLearnText">
      <p>{{ updatedStatus }}</p>
      <input type="submit" value="Save">
    </form>
  `
});

export default newLearnForm;