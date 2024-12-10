import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
    this.time = setInterval(() => {
      console.log("Time Interval every 1 sec");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.time);
    console.log("Interval cleared");
  }

  render() {
    const { name, location } = this.props;
    console.log("Child Render");
    return (
      <div className="user">
        <h1>
          Information about the user from class based component {name} from{" "}
          {location}
        </h1>
        <h2>Count is {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}

export default UserClass;
