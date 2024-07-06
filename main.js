import {color} from "./color.js";
let background=document.getElementById("body")
let naMe = document.querySelector("nav h1")
let button=document.getElementById("button")

const changeColor=()=>{
let rand=Math.floor(Math.random()*color.length);
background.style.backgroundColor=color[rand];
let colorName=background.style.backgroundColor;
naMe.textContent="background colour=";

let a=document.createElement("a")
a.textContent=background.style.backgroundColor;
a.style.color=background.style.backgroundColor;
naMe.append(a)

button.style.backgroundColor=background.style.backgroundColor

if (background.style.backgroundColor==="white"){
    naMe.style.background="black"
}
}

button.addEventListener("click",changeColor)


console.log(button)