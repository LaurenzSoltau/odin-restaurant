import "./styles.css";
import loadHomePage from "./homepage.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

addEventListener("load", () => loadHomePage());

document.querySelector("#home").addEventListener("click", () => {
    loadHomePage();
})

document.querySelector("#menu").addEventListener("click", () => {
    loadMenuPage();
})

document.querySelector("#about").addEventListener("click", () => {
    loadAboutPage();
})

