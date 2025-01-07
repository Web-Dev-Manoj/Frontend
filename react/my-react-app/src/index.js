import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App' // change to targeted 
// import './index.css'; // change if you use tic-tac-toe project

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

// root.render(React.createElement(App)); // non-jsx way of defining elements
