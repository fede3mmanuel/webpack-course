import style from "./style.css";
import logo from "./assets/webpack.svg";

const arr = [1, 2, 3],
 codeESNext = () => console.log(...arr);

console.log("Webpack without configuratio");

codeESNext();

document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack" >`

// alert("Hola");
