/* global Vue */

// instruct webpack to do Sass compilation
require('../sass/style.scss');

// bring in our custom Vue component
require('../js/components/new-learn-form.js');

// initialise our Vue app with its initial state
const App = new Vue({
  el: '#app',
  data: {
    learnsList: [
      { id: 0, text: 'Test learn 1' },
      { id: 1, text: 'Test learn 2' },
      { id: 2, text: 'Test learn 3' }
    ],
    newLearnText: '',
    status: 'Type your new learning for today in the field above, and click "Save".'
  }
});