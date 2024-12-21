import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "User1",
});

export default UserContext;
