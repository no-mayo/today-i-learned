/* global firebase */

firebase.initializeApp({
  apiKey: "AIzaSyCAZmqm5ADWiJaS3RVrnyc9a9_6eJREwwg",
  authDomain: "today-i-learned-5e095.firebaseapp.com",
  databaseURL: "https://today-i-learned-5e095.firebaseio.com",
  projectId: "today-i-learned-5e095",
  storageBucket: "today-i-learned-5e095.appspot.com",
  messagingSenderId: "691472609212"
});

export default firebase.database();