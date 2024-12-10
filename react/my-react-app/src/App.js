// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
import { useState } from 'react';

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

function Header() {
  const [trigger, setTrigger] = useState(true);
  function handleClick() {
    console.log(trigger);
    setTrigger(!trigger);
  }
  return (
    <div>
      {trigger && <button onClick={handleClick}>Delete</button>}
      {!trigger && (<div data-testid="alert" id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={handleClick}>Proceed</button>
      </div>)}

    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <a href="www.google.com" target="_self">click me</a>
      <a href="www.google.com" target="_blank">click me</a>
      <a href="www.google.com" target="_parent">click me</a>
      <a href="www.google.com" target="_top">click me</a>

    </div>
  )
};

export default App;