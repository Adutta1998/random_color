import './style.css'

let color = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let body = document.querySelector("body");
let button = document.querySelector("button");

let gradient = document.querySelector<HTMLInputElement>("#gradient");



window.addEventListener("DOMContentLoaded", () => {
  let color = generateRandomColor();
  body!.style.backgroundColor = color;
  button!.innerText = color;
})

button?.addEventListener("click", () => {
  let c1 = generateRandomColor();
  let c2 = null;
  if (gradient!.checked) {
    c2 = generateRandomColor();
  }
  if (c2 != null) {
    body!.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
    button!.innerText = `${c1},${c2}`;
  } else {
    body!.style.background = "";
    body!.style.backgroundColor = c1;
    button!.innerText = `${c1}`;
  }
})

function generateRandomColor(): string {
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += color[Math.floor(Math.random() * color.length)];
  }
  return colorCode;
}