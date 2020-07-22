import React from "react";
import ReactDOM from "react-dom";

const fname= "sneha";
const lname= "chawla";
const luckyno = "8";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
  <h1>Hi {fname +" "+ lname}!</h1>
  <p> your lucky number is {luckyno}</p>
  </div>,rootElement
);
