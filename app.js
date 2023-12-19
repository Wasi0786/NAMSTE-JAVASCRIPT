// const heading  = React.createElement("h1", {id: "head"}, "hello from react");

// const root  = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

const parent = React.createElement(
  "div",
  { id: "parent" },
 [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heaid" }, "hello"),
        React.createElement("h5", { id: "heaid" }, "hel484lo"),
      ]),

      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "heaid" }, "hello"),
        React.createElement("h5", { id: "heaid" }, "hel484lo"),
      ])
 ]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
