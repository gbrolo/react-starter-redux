# React-starter-redux
![react-starter-redux][assets/img/react-logo.png]
A React boilerplate built with React 16, Redux and with Firebase integration.

## Installation
Clone the repository and run ```npm install```.

## Basic setup
Project structure goes like this:

```
    -- /assets
    -- /src
        -- /actions
        -- /components
        -- /firebase
        -- /reducers
        -- /styles
        -- constants.js
        -- index.html
        -- index.js
    -- .babelrc
    -- .eslintrc
    -- .gitignore
    -- LICENSE
    -- package-lock.json
    -- package.json
    -- webpack.config.js
    -- yarn.lock
        
```

Place all your assets (images, text files, etc.) inside the ```/assets``` directory.
Place all your components inside their own directories inside the ```/components``` directory.
All your ```scss``` files can go inside the ```/styles``` directory.

## Redux integration
Boilerplate implements [Redux](https://redux.js.org/) as a state container.

Place your actions inside the ```/actions``` directory.
Place your reducers inside the ```/reducers``` directory.
Write your constants in the ```constants.js``` file.

### Redux-thunk
Boilerplate comes with Thunk middleware for Redux. You can write [thunks](https://github.com/reduxjs/redux-thunk) to delay the evaluation of expressions.

## Firebase integration
This boilerplate integrates a simple [Firebase](https://firebase.google.com/) firestore database.

Inside the ```firebase``` directory you will find the file ```firebase.js``` in which you must copy your credentials supplied by Firebase. Inside the same directory, create providers to communicate with Firebase.

### Connection tests
As an example, you can see ```firebase/CollectionProvider/CollectionProvider.test.js```, which contains tests made with [Jest](https://jestjs.io/), a delightfull suite for making javascript tests. To run the tests, you can use command ```npm test```.

## Dependencies
This Boilerplate comes with a collection of dependencies that will get you on track!

### Development dependencies
```package.json```
```json
"devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^1.0.0",
    "eslint": "^5.6.1",
    "eslint-loader": "^2.1.1",
    "eslint-plugin-react": "^7.11.1",
    "html-webpack-plugin": "^3.2.0",
    "image-webpack-loader": "^4.3.1",
    "jest": "^23.6.0",
    "node-sass": "^4.9.3",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.22.1",
    "webpack": "^4.17.1",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.5"
  },
```

[Babel](https://babeljs.io/) is a Javascript compiler that transpiles your ES6 code into code that today's web browsers can understand. Each one of the dependencies stated above will ensure your React application is understood by web browsers.

[Webpack](https://webpack.js.org/) is a Javascript bundler that will 'hold' all your application together.

[html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) will simplify the creation of HTML files to serve your bundle made with Webpack.

[image-webpack-loader](https://www.npmjs.com/package/image-webpack-loader) will help Webpack into loading your image files you import inside your project.

[css-loader](https://www.npmjs.com/package/css-loader) interprets all of the ```@import``` and ```url()``` statements, as statements Webpack can understand, so that when Webpack bundles your application, all your styles are bundled as well. ```node-sass```, ```sass-loader``` and ```style-loader``` will also help Webpack into loading your ```.scss``` files.

[ESLint](https://eslint.org/) is a linting utility for Javascript that will raise warnings and code errors in the development of your React application. Boilerplate has already done React setup, so that React rules can be understood. You can check this file at ```.eslintrc```.

### Dependencies
```package.json```
```json
"dependencies": {
    "bootstrap": "^4.1.3",
    "firebase": "^5.5.6",
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "react-redux": "^5.0.7",
    "react-router": "^4.3.1",
    "react-router-dom": "^4.3.1",
    "reactstrap": "^6.4.0",
    "redux": "^4.0.0",
    "redux-thunk": "^2.3.0"
  }
```

[React](https://reactjs.org/) is a Javascript library for building user interfaces. Boilerplate comes with version 16. ```react-dom``` serves as the entry point to the DOM and server renderers for React.

[react-redux](https://www.npmjs.com/package/react-redux) will give you the React bindings for Redux. This means, it'll help you applying Redux into your application.

[react-router](https://www.npmjs.com/package/react-router) is the package for having declarative routing for React. This package, in version 4, will help you creating persistent Routes in you application. ```react-router-dom``` gives the DOM bindings for React Router.

[Reactstrap](https://reactstrap.github.io/) is a cool package that will provide you with easy access to [Bootstrap 4](https://getbootstrap.com/) React components.

[Firebase](https://firebase.google.com/) is a non-sql database, storage and authentication service provided by Google for building apps faster and easier.

## Running in development mode
Boilerplate comes with script ```npm start``` which will launch your application in development mode in ```localhost``` at port ```8080```.

## Preparing for production
Boilerplate comes with script ```npm run build``` which will bundle your app into the ```/dist``` directory. Upload the contents of this directory to your server.

## Running tests
Boilerplate comes with script ```npm test``` which will launch Jest tests configured inside the ```/src``` directory. As an example, you can see ```firebase/CollectionProvider/CollectionProvider.test.js``` and edit or make your own tests.

## License
See [LICENSE](LICENSE).