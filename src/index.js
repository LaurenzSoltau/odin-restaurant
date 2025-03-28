import "./styles.css";
import { homePage } from "./homepage.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

function loadPage(page) {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    const pageElement = page();
    contentDiv.appendChild(pageElement);
}

document.addEventListener("DOMContentLoaded", () => {
    loadPage(homePage);
    document
        .querySelector("#home")
        .addEventListener("click", () => loadPage(homePage));

    document
        .querySelector("#menu")
        .addEventListener("click", () => loadPage(menuPage));

    document
        .querySelector("#about")
        .addEventListener("click", () => loadPage(aboutPage));
});
