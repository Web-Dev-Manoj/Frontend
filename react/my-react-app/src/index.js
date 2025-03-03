import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Practise/App' // change to targeted 
// import './index.css'; // change if you use tic-tac-toe project

const root = ReactDOM.createRoot(document.getElementById('root'));
// document.getElementById('root'); // we need to retrieve the element where we are going to render our component.

root.render(<App />); // This indicates what to render.

// root.render(React.createElement(App)); // non-jsx way of defining elements
