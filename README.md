# Elevated React

[![npm version](https://badge.fury.io/js/elevated-react.svg)](https://badge.fury.io/js/elevated-react)

Elevated React is an extended [Create-React-App](https://github.com/facebook/create-react-app) with additional technology and organized file structure. Upon running the command an entire react application will be created with all the bells and whistles.

View the [Github](https://github.com/DaltonHart/Elevated-React)

Submit issues [HERE](https://github.com/DaltonHart/Elevated-React/issues)

## Technology included and set up:

- [React](https://reactjs.org/)
- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [Redux](https://redux.js.org/)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- [Sass](https://sass-lang.com/) (Folder Structure Only)
- [Axios](https://www.npmjs.com/package/axios)

## How to use:
If you want to install globally you can use:

```bash
npm i -g elevated-react
```
Then you can start your application with: 

```bash
elevated-react app-name
cd app-name
npm start
```

How to use with npx without installing globally: 

```bash
npx elevated-react app-name
cd app-name
npm start

```

*(npx comes with npm 5.2+ and higher)*

## Structure

File structure for organization is as so: 

```
Project-Folder
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── sass
│   ├── components
│   │   ├── _base.scss
│   │   └── _header.scss
│   └── index.scss
├── src
│   ├── App.js
│   ├── App.test.js
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── Header.js
│   │   ├── Home.js
│   │   └── List.js
│   ├── config
│   │   └── routes.js
│   ├── constants
│   │   └── action-types.js
│   ├── containers
│   │   └── baseContainer.js
│   ├── index.css
│   ├── index.css.map
│   ├── index.js
│   ├── logo.svg
│   ├── models
│   │   └── Base.js
│   ├── reducers
│   │   └── index.js
│   ├── registerServiceWorker.js
│   └── store
│       └── index.js
└── yarn.lock
```