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

  tick() {
    for (const counter of this.counters) {
      counter.tick();
    }
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
