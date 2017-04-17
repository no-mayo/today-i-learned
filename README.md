# Today I Learned

Record something you've learned every day and see your awesome progress.

Check it out: https://louiseswift.github.io/today-i-learned/

## This app uses

* React
* Babel
* Webpack
* Firebase (soon)

## To deploy to production

The /dist folder of this app contains everything needed to run the single-page application. It's hosted on GitHub Pages.

To send updates to production, use a subtree push to deploy the /dist folder to the gh-pages branch:

```
git add dist && git commit -m "[commit message here]"
git subtree push --prefix dist origin gh-pages
```