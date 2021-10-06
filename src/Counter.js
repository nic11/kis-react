import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  tick() {
    ++this.state.count;
  }

  render() {
    console.log('render', this, this.state);
    return (
      <div className="Counter">
        {this.props.description}<br />
        {parseInt(this.props.start) + this.state.count}
      </div>
    );
  }
}

export default Counter;
