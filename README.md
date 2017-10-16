# cordova-react-redux-app

An opinionated development-ready Cordova-React-Redux boilerplate that will instantly get you going.

## Features
* [x] Cordova
  * [x] Crosswalk
* [x] React
* [x] Redux
* [x] Redux DevTools
* [x] React Router
* [x] axios
* [x] Webpack
  * [x] Babel (react, es2015, stage-2)
  * [x] SASS
  * [x] Watcher
  * [x] Hot reloading
* [x] Flow
* [x] Express server
* [x] .editorconfig
* [x] Custom fonts



## Setup

### Download
You can either download the latest release `.zip` and simply unzip it in your project directory.

### Clone

Clone from git in a desired project directory.
```
git clone https://github.com/LEINWAND/react-redux-app awesome-app
```

### npm

Alternatively, you can install w/ `npm` and copy the module from `node_modules/`. In this case you'll need to rename `.npmignore` to `.gitignore` after copying.

```
mkdir awesome-app; cd awesome-app
npm install react-redux-app
cp -Rv node_modules/react-redux-app/. .
mv .npmignore .gitignore
```

## Install
Simply install the npm project dependencies:
```
npm install
```

Make sure to have cordova installed globally and complete installation of certain requirements.

The requirements needed can be found using the command:
```
cordova requirements
```

Follow these guidelines to complete Setup  
https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements  
https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#installing-the-requirements  

**IMPORTANT**: Using Java JDK 9 would result in an exception, for now please **use Java JDK 8 instead**.

## Setup (Windows-only)
Windows users have to reconfigure Webpack and install some additional dependencies.

Special thanks to Cheng for his guidance on this issue. (see [#12](https://github.com/LEINWAND/react-redux-app/issues/12#issuecomment-319654121))


## Serve & watch

Serve and watch app _( without hot reloading )_:
```
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Hot reloading
This package also enables hot reloading over `webpack-dev-server`. To serve and watch a _hot_ app, run:
```
npm run hot
```
Open [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/) in your browser.

## Notes

This package doesn't reload the Redux state yet (see [#6](https://github.com/LEINWAND/react-redux-app/issues/6))

There are other scripts too, just have a look at `package.json` and use to your likings.

## DevTools

Install the React and Redux developer tools, which are extremely useful:

### React
Check out Facebook's [React DevTools Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/)

### Redux
* [Official repository](https://github.com/zalmoxisus/redux-devtools-extension)
* [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/)
* [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/remotedev/)


## Styling
Require `components` and `containers` related stylesheets in the `index.js` of the respective component/container like so:

```es6
require('./Button.scss')
```
**NOTE**: Using this approach, you have to take care about the order in which you require styles.

Use non-component related SCSS styles in the appropriate subfolders in the `stylesheets/` directory.

### Base
The `base/` folder contains boilerplate stuff such as:
* `reset.scss` or `normalize.scss`
* `typography.scss`

### Utils
The `utils/` folder contains global variables, mixins, helper selectors and similar:
* `config.scss` or `variables.scss` (recommended)
* `mixins.scss`
* `placeholders.scss` or `helpers.scss` (recommended)

### Vendors
The `vendors/` folder contains 3rd-party libraries and frameworks such as:
* `materialize.scss`
* `bootstrap.scss`
* `jquery-ui.scss`
* `wysiwyg-editor.scss`


## Licence

[The BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause) (BSD-3-Clause)
