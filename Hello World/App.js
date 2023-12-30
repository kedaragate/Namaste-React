import React from "react";
import ReactDOM from "react-dom/client";

const ele = [
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "heading" }, "hi"),
    React.createElement("h1", { id: "heading-sib" }, "hi from sibling"),
  ]),
  React.createElement("div", { id: "parent-sib" }, [
    React.createElement("h1", { id: "heading1" }, "hi"),
    React.createElement("h1", { id: "heading1-sib" }, "hi from sibling"),
  ]),
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);
