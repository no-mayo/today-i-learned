# Today I Learned

Record something you've learned every day and see your awesome progress.

Check it out: https://louiseswift.github.io/today-i-learned/

## This app uses

* React
* Babel
* Webpack
* Firebase (soon)
* Redux (possibly one day)

## To start working on this project

```
git clone [repo]
cd today-i-learned
npm install
npm start // to run dev server
```

Visit `http://localhost:5000/dist/` to view the project.

In a separate terminal tab, run `webpack --progress --watch` for project files to be recompiled on change. (If this doesn't work, try `node_modules/webpack/bin/webpack.js --progress --watch`.)

## To deploy to production

The /dist folder of this app contains everything needed to run the single-page application. It's hosted on GitHub Pages.

To send updates to production, use a subtree push to deploy the /dist folder to the gh-pages branch:

```
git add dist && git commit -m "[commit message here]"
git subtree push --prefix dist origin gh-pages
```