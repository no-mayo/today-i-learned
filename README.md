# Today I Learned

Record something you've learned every day and see your awesome progress.

Check it out: https://no-mayo.github.io/today-i-learned/

## This app uses

* Vue.js
* Babel
* Webpack
* Firebase

## Dependencies

* Node.js ([installation guide](https://nodejs.org/en/download/))
* NPM (comes with Node, but you might want to update NPM as per [this guide](https://docs.npmjs.com/getting-started/installing-node))

## To start working on this project

Start by reviewing our [contributing guidelines](https://github.com/no-mayo/today-i-learned/blob/master/CONTRIBUTING.md).

Check that you have Node.js installed: `node -v` (if not, [install it](https://nodejs.org/en/download/))

You’ll need a (free) Firebase app with the realtime database enabled, and a Twitter app so that you can enable the Twitter auth feature in Firebase, too.

The steps for this are fairly simple but there are a few of them, so follow carefully if you haven’t done this before:

1. Log into [Firebase](https://firebase.google.com/) - you'll need to create a Google account if you don't already have one
2. Within Firebase, create a new project named something like "today-i-learned-dev"
3. Within that project, enable the Real-Time Database feature as per the [Firebase Web "Getting Started" instructions](https://firebase.google.com/docs/database/web/start?authuser=0)
4. Within your Firebase database, you may wish to add access rules to protect any user data , e.g.:
   ```
     {
       "rules": {
         "users": {
           "$user_key": {
             // grants read & write access to the owner of this user account
             // whose uid must exactly match the key ($user_id)
             ".read": "auth != null && $user_key === auth.uid",
             ".write": "auth != null && $user_key === auth.uid"
           }
         }
       }
     }
   ```
5. Enable Twitter Authentication in your Firebase project as per their documentation [here](https://firebase.google.com/docs/auth/web/twitter-login?authuser=0)
6. Now is a good time to clone this repository, if you haven't already:

   ```
   git clone git@github.com:no-mayo/today-i-learned.git
   cd today-i-learned
   npm install
   npm start // to run dev server
   ```

7. You can now open up `/js/firebase-config.js` in the codebase and paste in your Firebase config (as per the "[Add Firebase to Your app](https://firebase.google.com/docs/web/setup?authuser=0)" documentation), overwriting any code that may already have been present in this file

Visit `http://localhost:5000/` to view the app.

In a separate terminal tab, run `webpack --progress --watch` for project files to be recompiled on change. (If this doesn't work, try `node_modules/webpack/bin/webpack.js --progress --watch`.)

## To deploy to production

The production app is currently hosted on gh-pages.

To deploy the latest version, push your latest commits from the repo's master branch to its gh-pages branch:

```
git push origin master:gh-pages
```
