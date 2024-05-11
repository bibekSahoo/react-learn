import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello World from React!");
const heading = <h1>Hello world from react via jsx </h1>;
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);