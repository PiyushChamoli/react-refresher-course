// Lecture6
Earlier Monolith architecture was used, which was basically one big project and everything will be built inside it and every time a change was done the whole big project was compiled and run.

Nowadays microservices architecture is used. A microservice is a software architectural style where an application is built as a collection of loosely and independently deployable services. This is also referred to sepration of concern and each service following it's job is referred to as single responsibility principle.

Different micro services can be deployed on different ports and these ports can be mapped to different services and by doing calls to differnt urls microservices can interact with each other.

2 approaches to fetch data from backend: first is When page loads - make API calls - render UI and the second approach is When page loads - render UI - make API calls - re render UI. We will follow 2nd approach as it gives better UX and React renders fast.

useEffect is needed for side effect operations.These operations aren't part of rendering process such as state changes, fetching data and dom manipulation. useEffect hook takes 2 arguments, first one being a callback function and second one is it's dependencies. useEffect is called when the Components is fully loaded.

Shimmer UI - showing an UI before the data renders.

Conditional rendering: rendering on the basis of whether a condition is true or not, for eg. if data has not loaded show shimmer UI otherwise render Component.

whenever state variable changes react triggers a reconciliation cycle (re renders).

Optional chaining is ES11 feature that checks whether the value before is null or undefined and if true return undefined thus preventing runtime error.

Cross Origin Resource Sharing is a security feature implemented by web browsers to restrict how resources on a web page can be requested from a different domain instead of the one serving the web page.
