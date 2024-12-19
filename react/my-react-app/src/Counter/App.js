// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import { useState } from 'react';
import Counter from './Counter';
import { useState } from 'react';

// let heading = React.createElement('h1', {
//   'This is Heading',
// });

// let ele = document.getElementById('root');
// let root = ReactDOM.createElement(ele);

// root.render(heading);

// function Header() {
//   const [price, setPrice] = useState(100);
//   const handleClick = () => {
//     setPrice(75);
//   }
//   return (
//     <div>
//       <p data-testid="price">${price}</p>
//       <button onClick={handleClick}>Apply Discount</button>
//       <h1>Hello world</h1>
//     </div>
//   );
// }

// Conditional Rendering:

// function Header() {
//   const [trigger, setTrigger] = useState(true);
//   function handleClick() {
//     console.log(trigger);
//     setTrigger(!trigger);
//   }
//   return (
//     <div>
//       {trigger && <button onClick={handleClick}>Delete</button>}
//       {!trigger && (<div data-testid="alert" id="alert">
//         <h2>Are you sure?</h2>
//         <p>These changes can't be reverted!</p>
//         <button onClick={handleClick}>Proceed</button>
//       </div>)}

//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Header />
//       <a href="www.google.com" target="_self">click me</a>
//       <a href="www.google.com" target="_blank">click me</a>
//       <a href="www.google.com" target="_parent">click me</a>
//       <a href="www.google.com" target="_top">click me</a>

//     </div>
//   )
// };

// Props:
// ----------
// react allows us to pass data from one component to another using concept called props.

// can use props in multiple ways:
// 1. directly using props:

// function App(props) { //we can use any name in place of props. should call with those name such as {elements.name} etc.
//   return (
//     <div>
//       <h1>Hello {props.name}, <i>{props.des}</i></h1>
//     </div>
//   )
// }

// 2. can destructure in Function parameter
// function App({ name, des }) { //props -> destructured into {name, des} -> can directly use those names
//   return (
//     <div>
//       <h1>Hello {name}, <i>{des}</i></h1>
//     </div>
//   )
// }

// can also destructure inside body
// function App(props) {
//   const { name, des } = props;
//   return (
//     <div>
//       <h1>Hello {name}, <i>{des}</i></h1>
//     </div>
//   )
// }


// 3.using default props
// function App({ name, des }) { // here name has default prop value
// if we dont pass name value by default it is going to take sai
// return (
//   <div>
//     <h1>Hello {name}, <i>{des}</i></h1>
//   </div>
// )
// can also pass as a pack, ans should be placed in component where we are passing 
// App.defaultProps = {
//   name: 'sai'
// }
//   return (
//     <div>
//       <h1>Hello {name}, <i>{des}</i></h1>
//     </div>
//   )
// }

// 4. can group all into a single Object
// function App({ ...elemets }) {
//   return (
//     <div>
//       <h1>Hello {elemets.name}, <i>{elemets.des}</i></h1>
//     </div>
//   )
// }


// Special Children prop & Component composition
// ---------------------------------------------
//   suppose we are calling component as:
// root.render(<App name="sai" des="Software Engineer">Content</App>);
// root.render(<App name="sai" des="Software Engineer">
//   <div>
//     <h1>This is component composition</h1>
//   </div>
// </App>); // we can place any jsx/ code syntax also


// now, children prop is used to retrieve the content in between the closing and ending tag.
// function App(props) { // content will be rendered here
//   return (
//     <div>
//       <p>{props.children}</p>
//     </div>
//   )
// }

// this process of adding component, inside another component is called as 'Component composition'

// Handling Events in React:
// -------------------------
// function App() {
//   function EventTrigger(name) { // passing function as values
//     console.log('Event Triggered by ' + name) // can also pass arguments, but using only arrow functions
//     // Reason: if we pass directly as {EventTrigger('Manoj Bhargav)}, it will execute immediatley and doesn't wait for the event to occur.
//     // Instead we use {() => {EventTrigger('Manoj Bhargav)}}, it first run anonymous function, then returns and wait till event occurs.
//   }
//   const handleClick = () => {
//     console.log(Math.trunc(Math.random() * 10));
//   }
//   return ( // here App is parent and Event is child Component, as we are passing EventTrigger fun which child component will be utilized
//     <div>
//       <button onClick={handleClick}>Clickme</button>
//       <Event eventfun={() => EventTrigger('Manoj Bhargav')} />
//     </div>
//   )
// }


// State & Hooks:
// --------------

// * without using state:
// let counter = 0;

// function App() {
//   const increment = () => {
//     counter += 1;
//     console.log(counter); // Updates in the console but NOT in the UI, because it renders component only once.
//   };

//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// * with state:
// This can be modified as:
// function App() {
//   const [counter, setCounter] = useState(0);
//   // const [counter, setCounter] = useState([20, 34]); // if we pass any other type, it will be made as string
//   // also always call hooks in top level.
//   const Counter = () => {
//     // const [counter, setCounter] = useState(0); // This is not allowed in react
//     // useState shouldn't be used inside any function other than component function.
//     console.log(counter)
//     setCounter(counter + 1);
//   }
//   return (
//     <div>
//       <p>Counter: {counter}</p>
//       <button onClick={Counter}>Increment</button>
//     </div>
//   )
// }

// update won't happen immediatley, it wait till the component rerenders and then it updates the value.

// Counter app:
// --------------
// always note that, the data should floe from top to bottom
function App() {
  const [counter, setCounter] = useState(0);
  const style = {
    textAlign: 'center',
  }
  const counterclick = () => {
    setCounter(counter + 1);
  }
  const resetclick = () => {
    setCounter(0);
  }
  return (
    <div>
      <h1 style={style}>Counter</h1>
      <Counter counterfn={counterclick} resetfn={resetclick} newcount={counter} />
    </div>
  )
}


// conditional rendering:
// ----------------------
// function App() {
//   const value = false;
//   if (value) {
//     return (
//       <div>
//         <h1>Hello if</h1>
//       </div>
//     )
//   } else {
//     return (
//       <h1>Hello else</h1>
//     )
//   }
// }

export default App;