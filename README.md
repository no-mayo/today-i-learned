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

```
git clone [repo]
cd today-i-learned
npm install
npm start // to run dev server
```

Visit `http://localhost:5000/` to view the project.

In a separate terminal tab, run `webpack --progress --watch` for project files to be recompiled on change. (If this doesn't work, try `node_modules/webpack/bin/webpack.js --progress --watch`.)

## To deploy to production

The production app is currently hosted on gh-pages.

To deploy the latest version, push your latest commits from the repo's master branch to its gh-pages branch:

```
git push origin master:gh-pages
```
