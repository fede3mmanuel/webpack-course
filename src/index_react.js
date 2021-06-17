import React from "react";
import ReactDom from "react-dom"; 
import style from "./style.css";
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";
import data from "./data.json";
import { HelloWorld } from "./components/HelloWorld.jsx";

ReactDom.render(
    <HelloWorld name="React" logo={logo} menu={data.links}/>, document.getElementById("app")
);


