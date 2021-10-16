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
          if (this.state.count == 10) {
            clearInterval(this.timerId);
          }
        } else {
          console.error(`bad invariant for timer {this.timerId}`);
          clearInterval(this.timerId);
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
        <div className="description">
          {this.props.description}
        </div>
        <div className="num">
          {this.props.start + this.state.count}
        </div>
      </div>
    );
  }
}

export default Counter;
