
export function createContactPage(){

    let contentDiv = document.querySelector("#content");
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("tab-div");

    let contactHeader = document.createElement("header");
    contactHeader.textContent = "CONTACT";
    contactDiv.appendChild(contactHeader);

    let hoursDiv = document.createElement("div");
    hoursDiv.classList.add("column-flex-divs");
    let hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "HOURS"
    let hoursText = document.createElement("p");
    hoursText.textContent = "Open everyday from 6PM to 12AM except Mondays!"
    hoursText.classList.add("hoursText");
    hoursDiv.appendChild(hoursHeader)
    hoursDiv.appendChild(hoursText);
    contactDiv.append(hoursDiv);

    let locationDiv = document.createElement("div");
    locationDiv.classList.add("column-flex-divs");
    let locationHeader = document.createElement("h3");
    locationHeader.textContent = "LOCATION"
    let locationText = document.createElement("p");
    locationText.textContent = "Cristiano Ronaldo Street, 22, 30402"
    locationText.classList.add("locationText");
    locationDiv.appendChild(locationHeader)
    locationDiv.appendChild(locationText);
    contactDiv.append(locationDiv);

    let phoneDiv = document.createElement("div");
    phoneDiv.classList.add("column-flex-divs");
    let phoneHeader = document.createElement("h3");
    phoneHeader.textContent = "PHONE NUMBER"
    let phoneText = document.createElement("p");
    phoneText.textContent = "912-342-123"
    phoneText.classList.add("phoneText");
    phoneDiv.appendChild(phoneHeader)
    phoneDiv.appendChild(phoneText);
    contactDiv.append(phoneDiv);

    contentDiv.appendChild(contactDiv);
}