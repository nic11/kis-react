import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const app = <App />;

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);
