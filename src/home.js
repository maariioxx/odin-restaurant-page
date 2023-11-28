
export function createHomePage(){

    let contentDiv = document.querySelector("#content");
    let homeDiv = document.createElement("div");
    homeDiv.classList.add("tab-div");
    let homeHeader = document.createElement("header");
    homeHeader.textContent = "BAR MANOLO";
    homeDiv.appendChild(homeHeader);

    let homeImg = document.createElement("img");
    homeImg.src = 'https://tapasypinchosvictoria.com/sites/default/files/noticias/jamon-tapas-1920-a.jpg'
    homeImg.alt = 'A plate of Spanish jamón';
    homeImg.classList.add("homeImg");
    homeDiv.appendChild(homeImg);

    let homeText = document.createElement("p");
    homeText.textContent = '"This typical Spanish bar is an amazing site to enjoy the enormous Spanish gastronomic culture. Enter and enjoy"';
    homeText.classList.add("homeText")
    homeDiv.appendChild(homeText);

    contentDiv.appendChild(homeDiv);
}