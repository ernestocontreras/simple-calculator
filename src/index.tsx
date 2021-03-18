import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './calculator/Calculator';

import 'normalize.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="centered">
      <Calculator />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
