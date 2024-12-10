import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user">
      <h1>
        Information about the user from Funtion based component {props.name}{" "}
        from {props.location}
      </h1>
      <h2>Count is {count}</h2>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        dicta recusandae deserunt velit error dolorum.
      </h2>
    </div>
  );
};

export default User;
