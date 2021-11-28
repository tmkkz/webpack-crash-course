import "./style.css";
import yaruo from "./yaruo.png";

console.log("Hello World!");

document.body.classList.add('haikei');

const image = new Image();
image.src = yaruo;
document.body.appendChild(image);