import React from "react";
import { useState } from "react";

function App() {
    return (
        <h1>hello</h1>
    )
}


// Two-way data binding:
// ---------------------
// function App() {
//     // let count = 200; // this way it doesnt update the state
//     //to implement one-way data binding, we use state hook
//     const [count, setCount] = useState(200);
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={() => {
//                 // count = count + 100;
//                 // setCount(count + 100)
//             }}>Click</button>
//             <input type='text' value={count} onChange={(e) => {
//                 setCount(e.target.value);
//             }} />
//         </>
//     )
// }

export default App;

//Virtual DOM (VDOM):
// -------------------
// Virtual DOM is just a light weight copy of real DOM.
// React only changes what are necessary, instead of loading entire DOM, which improves performance.
// if change comes -> react first updates virtual DOM -> now, compare with real DOM (uses Diffi alg) -> updates only that are different.
// eg): just create one h1 counter and update it for every click.
//     add 10 li elements.
//         in normal JS, all these will be rerender and you can see the difference in DOM.
//             but, in react only h1 elemt rerenders.

// Reconciliation:
// -----------------
// The process of comparing virtual DOM with real DOM and update only the necessary elements is called as 'Reconciliation'.
// uses Diffi Algorithm.

// Conditional Rendering:
// -------------------------
// conditional rendering is the process where rendering of UI elements happens based on conditions.
// It is similar of how we use if and else in normal programming language.
// we can use this using two ways:
// 1. Ternary operator(for two conditions)
// 2. && operator for one condition

// Two-way data binding:
// -----------------------
// Two way data binding is the process in ReactJS.
// if the data model changes, it should also reflect in UI.this is called one - way data binding.
// similarly, if we / user change anything in UI, it should automatically update data model.this is called two - way data binding.
// This can be see in elements in like input etc.

//useEffect() hook:
// ------------------
// useEffect() is a react hook that let us perform side effects in functional component.
// side effects includes like fetching data, updating the dom etc.
//     syntax:
// useEffect(callback function, [dependencies](optional));