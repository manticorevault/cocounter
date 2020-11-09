import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./Counter"
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
export default Counter;
