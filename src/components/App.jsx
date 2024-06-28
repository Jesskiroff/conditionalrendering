import { renderHook } from '@testing-library/react';
import React from 'react';

var isLoggedIn = false;
function renderConditionally() {
  if (isLoggedIn) return <h1>Hello</h1>;
  else {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}
function App() {
  return (
    <div className="container">
      {/* <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}
      {/* As log as my isLoggedIn b=variable is set to true, an H1, saying hello, will pop up. When it is set to false, a log in screen comes up */}
      {renderConditionally()}
    </div>
  );
}

export default App;
