import { createHomePage } from "./home";
import { createMenuPage } from "./menu";
import { createContactPage } from "./contact";
import "./styles.css";

let body = document.querySelector("body")
let contentDiv = document.querySelector("#content");
let buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("id", "buttons-div");

let homeButton = document.createElement("button");
homeButton.textContent = "HOME"
homeButton.classList.add("nav-buttons");
buttonsDiv.appendChild(homeButton);

let menuButton = document.createElement("button");
menuButton.textContent = "MENU"
menuButton.classList.add("nav-buttons");
buttonsDiv.appendChild(menuButton);

let contactButton = document.createElement("button");
contactButton.textContent = "CONTACT"
contactButton.classList.add("nav-buttons");
buttonsDiv.appendChild(contactButton);

body.insertBefore(buttonsDiv, contentDiv);


function changeTab(){
    let tabDiv = document.querySelectorAll(".tab-div");
    tabDiv.forEach(div => {
        div.remove();
    })
};

homeButton.addEventListener("click", () => {
    changeTab();
    createHomePage();
})

menuButton.addEventListener("click", () => {
    changeTab();
    createMenuPage();
});

contactButton.addEventListener("click", () => {
    changeTab();
    createContactPage();
});

createHomePage();