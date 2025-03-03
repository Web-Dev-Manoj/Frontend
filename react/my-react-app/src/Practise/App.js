import React from 'react';
import ReactDOM from 'react-dom/client';

// ReactJS - Invented by Jordan walke in the year 2013.
// React js is a javascript library used to build Interactive UI.
// it is Declarative, flexible, and efficient to use for building SPA & mainly reusable components.

// component: 
// component is a building block in React.
// components are used to split the code into multiple, independent reusable UI's that we create, that can be thought as js function
// that returns jsx content.

function Header() { // this is called as 'custom component'.
    return <h1>I'm Header</h1> /* For one line return, we can ignore parenthesis */
}

// In javascript, if we want to use any function, directly we can call it as Header().
// but, In react we need to call it as <Header/>, underhood, react will call the function.

function App() {
    return (    // each javascript function (i.e..,component) should return only one element like above Header function
        // if there are more than one, we need to wrap it up under parent element like <div>, like App function */
        <div>
            <Header /> {/* if we are using self closing format, forward is mandatory */}
            <h2>I'm learning react</h2>
        </div>
    )
}

// why custom components should named with capital letter?
// Ans: Because, it is used to differ custom component and default html elements.
// (i.e.., to tell react that is not a default element) 


export default App;