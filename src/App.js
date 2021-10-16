import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter description="anime" start="0" />
        <Counter description="sloc" start="10" />
      </div>
    );
  }
}

export default App;
