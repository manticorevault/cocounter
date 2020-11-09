import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';

ReactDOM.render(
  <React.StrictMode>
    <div className="count-grid">
      <label>
        Contador 1
      </label>
      <Counter />

      <label>
        Contador 2
      </label>
      <Counter />

      <label>
        Contador 3
      </label>
      <Counter />

      <label>
        Contador 4
      </label>
      <Counter />

      <label>
        Contador 5
      </label>
      <Counter />

      <label>
        Contador 6
      </label>
      <Counter />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

