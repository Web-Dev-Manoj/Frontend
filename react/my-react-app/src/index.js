import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Counter/App' // change to targeted app

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);

// root.render(React.createElement(App)); // non-jsx way of defining elements
