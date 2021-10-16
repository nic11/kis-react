import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => {
        if (this.state.count < 10) {
          this.setState({count: this.state.count + 1});
        }
      },
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="Counter">
        {this.props.description}<br />
        {this.props.start + this.state.count}
      </div>
    );
  }
}

export default Counter;
