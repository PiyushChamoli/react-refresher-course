// Lecture 8

Class based components have a render method which returns the JSX.

Super(props) is to be called in constructor(props) of class based components.

In class based components never update state variables directly. Always use setState().

order of calls made in class based component: 1) Parent Constructor 2) Parent Render 3) Child Constructor 4) Child Render 5) Child componentDidMount 6) Parent componentDidMount

As we follow Load>render>API>render for class based comp componentDidMount works as useEffect that is after rendering it makes API call

React component lifecycle consists of 2 phase:
Render Phase -> Mounting(Constructor & Render)
Commit Phase -> Mounting(React updates DOM & componentDidMount)

React is fast also because it batches if there are multiple components. First react will implement the render phase of the multiple components that is running the constructor and render which happens by reconciliation process of comparing the virtual dom and actual dom. Then React will start commit phase of all the comps.
