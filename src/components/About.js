import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
        {/* <User name={"piyush (Function)"} location={"Mumbai"} /> */}
        <UserClass name={"piyush (Class)"} location={"Mumbai"} />
      </div>
    );
  }
}

export default About;
