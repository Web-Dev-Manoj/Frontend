import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// let heading = React.createElement('h1', {}, 'This is paragraph');

// let ele = document.getElementById('root');
// let root = ReactDOM.createElement(ele);

// root.render(heading);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

// App.defaultProps = {
//     name: 'sai'
// }

root.render(<App name="sai" des="Software Engineer">Content</App>);
// root.render(<App name="sai" des="Software Engineer">
//     <div>
//         <h1>This is component composition</h1>
//     </div>
// </App>); // we can place any jsx/code/functions also syntax also