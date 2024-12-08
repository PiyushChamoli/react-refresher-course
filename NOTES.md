// Lecture 7

If there's no dependency array useEffect will be called on every component render.
If dependency array is present but empty it is only called once on the inital render.
If dependency array is present and not empty then it is called whenever that state variable updates.

Always try to use hooks at the start of the functional component.

Don't use useState inside a conditional statement such as if else, for, functions.

2 types of routing in web applications- client side and server side routing.

We used react router dom for routing.
createBrowserRouter is used to create the various routes(paths,children,elements and errorElement).
RouterProvider is used to point towards the route using router.
Outlet is used for replacing components based on paths.

Never use anchor tags for routing in React as we have better efficient options which works without reloading page such as Link tag by react router dom.

SPA single page application uses client side routing(no network calls are being made as all the components are already present in the app) and doesn't reload the webpage.
