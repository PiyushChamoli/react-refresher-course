import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <div>
          <span className="font-bold">Logged User: </span>
          <UserContext.Consumer>
            {(data) => <span>{data.loggedInUser}</span>}
          </UserContext.Consumer>
        </div>
        {/* <User name={"piyush (Function)"} location={"Mumbai"} /> */}
        <UserClass name={"piyush (Class)"} location={"Mumbai"} />
      </div>
    );
  }
}

export default About;
