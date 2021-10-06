import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  constructor() {
    super();
    this.counters = [
      <Counter description="anime" start="0" />,
      <Counter description="sloc" start="10" />
    ];
  }

  render() {
    return (
      <div className="App">
        {this.counters}
      </div>
    );
  }
}

export default App;
