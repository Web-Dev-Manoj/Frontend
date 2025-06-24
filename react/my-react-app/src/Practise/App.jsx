import React from 'react';
// each and every file should contain only one default

// REACT:
// ------
// ReactJS is a javascript library for building Interactive UI. especially, SPA's(Single page applications).
// It allows developers to build large applications that can update and render efficiently, in response to the data changes.
// simply, ReactJS is declarative, efficient and flexible library for building reusable components.

// WHY REACTJS:
// ------------
// Vanilla JS makes code larger and complex.
// for bigger applications, it becomes difficult to manage state changes, DOM manipulation and UI updates.

// JSX:
// ----
// JSX stands for Javascript XML (extensible markup language)
// JSX is 'javascript syntax extension' that allows us to write html like code inside javascript in our react apps.
// it allows embedding javascript expressions inside markup.
// -> each and every component should return only one jsx element.
// -> also, all the jsx attributes should follow camelCase naming format.

// FEATURES:
// ---------
// 1. Declarative UI
// 2. JSX
// 3. Virtual DOM
// 4. Component base Architecture
// 5. One way data binding
// 6. code Maintainability and reusability

// COMPONENT:
// ----------
// Components are building blocks in react.
// they allow us to split the code into multiple independent reusable UI's, that can be thought as a javascript functions that returns jsx content.
// -> Component name should alway start with capital Letter.
// -> each and every component should always return one JSX element. if not, should wrap inside parent element/ Fragments.
// function App() { // JS function, that returns JSX content.
//     return <h1>Hello</h1>
// }

// WHAT HAPPENS IF I START WITH SMALL LETTER:
// ------------------------------------------
// it won't throw any error. but, then React, doesn't treat that as a component, instead it treats as a normal html element.
// function app() {
//     return <h1>Hello world</h1>
// }
// components are of '2' types: 1.) Class components 2.) Functional components
// FUNCTIONAL COMPONENTS: javascript function that returns JSX content.
// CLASS COMPONENTS: ES6 class syntax, that extends React.Component.

// WHY FUNCTIONAL COMPONENTS?
// ------------------------
// we often prefer functional components as they are simpler, easy to understand and offer better performance due to the removal of lifecycle methods.
// also, with the help of hooks (introduced in react 16.8), they handle state changes and side effects efficiently.

// VIRTUAL DOM:
// ------------
// virtual DOM is nothing but a light weight copy of real DOM that react stores in memory.
// instead of directly updating the real DOM, it first updates virtual DOM, compares with the previous version, then updates only the necessary changes.
// three phases of Virtual DOM: Render -> Diffing -> update Phases.
// why virtual DOM:
// 1. minimizes DOM interactions and manipulations.
// 2. Better diffing algorithm.
// 3. Batch updates for better performance.

// PROPS:
// ------
// props are read-only values passed from parent to child components. simply, these are inputs to our components.
// props allows us to reuse the same component with different versions of data.
// also, these are immutable. we cannot change values inside child components.
// eg: <Header name="heading1" />
// these props will be passed as read-only objects, and can be accessed in many ways(using props. , destructuring etc)

// STATE:
// ------
// State of a component is an object that holds certain information about component that may change over the lifecycle of component.
// simply, state is a mutable data store that is managed inside component. it triggers re-renders when updated.

// RECOINCILIATION:
// ----------------
// Recoinciliation is the process of continuosly comparing the new virtual DOM with the previous version, and updating only the necessary ones in the real DOM.

// TRANSPILATION:
// --------------
// Transpilation is the process of converting modern js and jsx into javascript version that browsers can understand.
// React uses 'babel' package for this process.

// EVENT HANDLING:
// ---------------
// event handling in react is nothing but how we 'capture' and 'handle' user interactions.
// In react, we use synthetic events, which are cross browser wrappers around native browser events.

// CONDITIONAL RENDERING:
// ----------------------
// conditional rendering is nothing but displaying different UI's based on the conditions like state, props and logic.
// this work same as conditions in native javascript.

// LIST & KEYS:
// ------------
// Rendering list of elements into JSX using .map() method.
// keys are unique indentifiers given to elements in lists, which are helpful in identifying which items are updated, removed or added.

// COMPONENT LIFECYCLE:
// --------------------
// component lifecycle refers to different stages a react component goes through from creation to destruction/ removal.
// there are mainly three phases:
// 1. Mounting phase:
// constructor() -> static getDerivedStateFromProps() -> render() -> componentDidMount()
// 2. updating phase:
// shouldComponentUpdate() -> getSnapshotBeforeUpdate() -> componentDidUpdate()
// 3. unMounting phase:
// componentWillUnmount()

// FRAGMENTS:
// ----------
// Fragments in React allows us to group multiple elements without adding any extra nodes in DOM, unlike a <div> element does.
// can be represented as <React.Fragments>(if attributes are available) or <>(shorthand)

// CHILDREN PROP:
// --------------
// props.children in React is a special prop that is used to pass nested component or content inside a parent component.
// it comes as a default prop for every component.
// <Header><p>Hello world</Header> -> props.children contains -> <p>Hello world</p>

// PROPTYPES:
// ----------
// PropTypes are 'type-checking' feature built in react. it allows us to validate props that a component receives at runtime and helps finding bugs.
// should import from 'prop-types' package
// syntax: <component name>.propTypes={
// name: PropTypes.string.isRequired
// }

// STYLING IN REACT:
// -----------------
// Styling in react is nothing but different ways how we can apply css to our components.
// Normal way(using classes), Inline CSS({{}}), using modules.

// TWO WAY DATA BINDING:
// --------------------
// Two way data binding is a mechanism in which UI elements and component state stays in sync.
// i.e.., a change in input updates state, and a change in state updates input.
// it is not a default behaviour in react, but can be acheived using controlled components.

// QUERY PARAMETERS:
// -----------------
// query parameters are key value pairs appended to a url after '?' used to pass data through the URL without changing the routing path.
// URL - unified resource locater
// can be acheived using useSearchParams and setSearchParams

// PROP DRILLING:
// --------------
// Prop Drilling is the process of passing data from parent component to nested child components through each and every intermediate components even if they don't need it themselves.
// to overcome these, we have contextAPI and Redux.

// PROP UPLIFTING/ LIFTING PROPS UP:
// ---------------------------------
// Lifting props up is the process of sending data from child to parent component.
// as we know, react is unidirectional. we need to pass function from parent to child, where child calls it by passing data to lift the state up.

// CODE SPLITTING:
// ---------------
// Code splitting is the process of breaking up javascript bundle into smaller chunks, so that users can download the code they need at that given time.
// can be acheived by using import() and React.lazy()

// LAZY LOADING:
// -------------
// Lazy loading is an optimizing technique used for loading components when they are needed, instead of loading at initial render.
// it improves performance and reduces initial bundle size.
// can be acheived by using React.lazy()

// HIGHER ORDER COMPONENTS (HOC):
// -----------------------------
// Higher order components are components that takes another components as input and returns a new component with added functionality.

// PORTALS:
// --------
// portals allows us to render a component outside its parent DOM hierarchy, typically into a different DOM node in HTML.

// PURE COMPONENTS:
// ----------------
// Pure components are components that only re-renders when there is actual change in state/props.
// unlike normal components, it uses shallow copy for comparision.

// CONTROLLED VS UNCONTROLLED COMPONENTS:
// --------------------------------------
// Controlled components are the components where form data is handled by React state.
// where as, uncontrolled components are components where form data is handled by DOM itself using ref's

// REACT HOOKS:
// ------------
// Hooks are the functions that allows us to use some react features in functional components.
// simply, Hooks allow functional components to manage state changes and side effects without using class components.

// useState() -> useState Hook allows us to add states in our components.

// useEffect() -> useEffect Hook is used to perform side effects in our components.
// side effects: sideeffects are any operations that interacts with the outside world. (simply operations outside component)
// -> with no dependencies -> re-renders every time when there is a change in component.
// -> with [] empty dependencies -> renders only one time, i.e.., initial rendering.
// -> with [x,y] dependencies -> re-renders only when there is any change to the passed states.
// cleanup function is optional in useEffect()

// useContext() -> useContext Hook is used to manage global data in our react application.
// There are mainly three steps: 1.) creating the context 2.) providing the context 3.) consuming the context

// useRef() -> useRef Hook allows us to access DOM elements and also allow us to create mutable variables that won't cause rerenders.

// useMemo() -> useMemo() is used to apply memotization in react.












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
