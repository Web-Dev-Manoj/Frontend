// importing all required packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Practise/App'; // named exports should be imported using curly braces {}
// import App from './Practise/App' // default exports can be imported without curly braces

// react-scripts -> package responsible for Build process that react runs in background.

// components are nothing but a javascript function that returns jsx element

// but index.js is a starting point of react application (react boots up from this)
// so in this file, we mention 2 things:
// 1. Where to render
// 2. What to render in that place

let root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />)
