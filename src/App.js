import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter description="Fist counter" start={0} />
        <Counter description="Second counter" start={10} />
      </div>
    );
  }
}

export default App;
