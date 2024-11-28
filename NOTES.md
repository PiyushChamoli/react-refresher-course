// Lecture 5
Two types of exports and imports: One is default export default name / import name from "src" and second is named export as in export const name / import {name} from "src".
React hooks are normal JS utility functions.
Whenever a state variable updates, react re renders the component.
useState goes const [name, setName] = useState([]);
Reconciliation Algo(React Fiber): Scenario is res.container has 10 restaurants which is changed now to 7 restaurants. It happens in such a way that Diffing Algo checks the change between Virtual DOM and Actual DOM and re renders the component which has changed.
useState has a second set function for changes as it triggers the diffing algo to work.
React is fast because it does efficient fast DOM manipulation.
