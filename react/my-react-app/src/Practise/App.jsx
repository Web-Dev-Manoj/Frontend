import React from 'react';
// each and every file should contain only one default

// component is a building block in React.
// we can think component as javascript function that retuns jsx element.

// while creating or defining component, we need to follow 2 rules:
// 1. Component name should start with Capital case.
// 2. should return atleast and atmost one jsx Element.

// -> what happens if i use small
// Ans.it won't throw any error. but, then React, doesn't treat that as a component, instead it treats as a normal html element.
// function app() {
//     return <h1>Hello world</h1>
// }

const name = "Saikumar";

function App() {
    return (
        <div>
            <h1>Hello world, {name}</h1>
            {/* dynamic values can be included inside curly braces.
            also, we can keep expressions also, if we want.
            */}
            <Header />
            {/* Normal JS function can be executed using function-name()
            but, in react, can use as normal self closing/ normal tag
            eg: <Header/>, <Header></Header>
            make sure to include forward slash, if we use self-closing
            underhood, React runs that function
            */}
            <Footer name="Manoj" color='red' /> {/* we can use the same components multiple times, with different data with the help of props */}
            <Footer name="Bhargav" color='green' />
        </div>);
}

// The components which we create/ define are called as 'custom components'

// when we are returning more than one Element, it should be wraped inside braces() and parent element like div or Fragments
// else, react throws an error
// export function Header() {
//     return
//         <h1>This is heading1</h1>
//         <h2>This is heading2</h2>
// }❌
// correct approach:✅
export function Header() {
    return (
        <div>
            <h1>This is heading1</h1>
            <h2>This is heading2</h2>
        </div>
    )
}
// props:
// ------
// 1. approach 1: using props
// export function Footer(props) {
//     return <p>Hi {props.name}, this is footer</p>
// }

// 2. approach 2: using props destructuring
export function Footer({ name, color }) { // while destructing, the attribute names should be same. else, it will not hold any value
    // here instead of name, if you give firstname or anyother name, it will be empty
    return <p style={{ color: color }}> Hi {name}, this is footer</p >;
    // we can also use dynamic approach for assigning attribute values.
}

export { App }; // named exports should be exported inside curly braces {}
// can export as default also:
// export default App;
// (instead you can mention in function as export default function ...)