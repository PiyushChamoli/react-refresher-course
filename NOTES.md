// Lecture 7

If there's no dependency array useEffect will be called on every component render.
If dependency array is present but empty it is only called once on the inital render.
If dependency array is present and not empty then it is called whenever that state variable updates.

Always try to use hooks at the start of the functional component.

Don't use useState inside a conditional statement such as if else, for, functions.
