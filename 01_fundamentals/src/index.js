import React from 'react';
import ReactDOM from 'react-dom/client';

// function Greeting() {
//   return <h2>My First Component</h2>;
// }

// function Greeting() {
//   return React.createElement('h2', {}, 'hello world');
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world')
//   );
// };

// function Greeting() {
//   return (
//     <div>
//       <h2>My First Component</h2>
//     </div>
//   );
// }

// FRAGMENT
// function Greeting() {
//   return (
//     <>
//       <h2>My First Component</h2>
//     </>
//   );
// }

// CLASS
// function Greeting() {
//   return (
//     <>
//       <h2 className='classNameNotClass'>My First Component</h2>
//     </>
//   );
// }

// NESTED ELEMENTS
function Greeting() {
  return (
    <>
      <Person />
      <Message />
    </>
  );
}

const Person = () => <h2>Amy</h2>;
const Message = () => <p>This is my message</p>


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);