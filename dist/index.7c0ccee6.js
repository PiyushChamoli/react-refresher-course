const heading = React.createElement("h1", {
    id: "header",
    abc: "xyz"
}, [
    "First line of react",
    React.createElement("h2", {
        id: "sub-header",
        abc: "xyz"
    }, "Child of header element")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.7c0ccee6.js.map
