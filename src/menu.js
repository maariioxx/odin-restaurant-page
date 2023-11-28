
export function createMenuPage(){

    let contentDiv = document.querySelector("#content");
    let menuDiv = document.createElement("div");
    menuDiv.classList.add("tab-div");

    let menuHeader = document.createElement("header");
    menuHeader.textContent = "MENU";
    menuDiv.appendChild(menuHeader);

    let menuGrid = document.createElement("div");
    menuGrid.classList.add("menuGrid");

    let food1 = document.createElement("div");
    let food2 = document.createElement("div");
    let food3 = document.createElement("div");
    let food4 = document.createElement("div");
    let food5 = document.createElement("div");
    let food6 = document.createElement("div");

    food1.classList.add("foodDiv");
    food2.classList.add("foodDiv");
    food3.classList.add("foodDiv");
    food4.classList.add("foodDiv");
    food5.classList.add("foodDiv");
    food6.classList.add("foodDiv");

    let food1Img = document.createElement("img")
    let food2Img = document.createElement("img")
    let food3Img = document.createElement("img")
    let food4Img = document.createElement("img")
    let food5Img = document.createElement("img")
    let food6Img = document.createElement("img")

    food1Img.src = 'https://yolandanutricionista.com/wp-content/uploads/2019/02/tortilla.jpg'
    food2Img.src = 'https://eu.tastescdns.net/thumbor/1EUhRwqQWevfMGKVA3wRovfdzik=/1200x675/filters:quality(65):brightness(2):contrast(2):rgb(2,-2,0):sharpen(0.2,0.2,true)/es/recipe/gF0FMLQHQVwjpm8fdPcL/3903526521b2442695aef9b8629a85.jpg'
    food3Img.src = 'https://content-cocina.lecturas.com/medio/2022/05/04/montadito-de-lomo-con-roquefort_beaf4b67_1200x1200.jpg'
    food4Img.src = 'https://okdiario.com/img/2019/08/18/receta-de-patatas-deluxe-con-ajo-y-perejil-655x368.jpg'
    food5Img.src = 'https://www.hogarmania.com/archivos/202309/huevos-rotos-jamon-f2-1280x720x80xX.jpg'
    food6Img.src = 'https://www.santaritaharinas.com/wp-content/uploads/2021/07/migas-de-panko.jpg'

    food1.appendChild(food1Img);
    food2.appendChild(food2Img);
    food3.appendChild(food3Img);
    food4.appendChild(food4Img);
    food5.appendChild(food5Img);
    food6.appendChild(food6Img);

    let food1Text = document.createElement("p");
    let food2Text = document.createElement("p");
    let food3Text = document.createElement("p");
    let food4Text = document.createElement("p");
    let food5Text = document.createElement("p");
    let food6Text = document.createElement("p");

    food1Text.textContent = "Tortilla de patatas"
    food2Text.textContent = "Zarangollo"
    food3Text.textContent = "Montadito de lomo"
    food4Text.textContent = "Patatas con ajo"
    food5Text.textContent = "Huevos rotos con patatas y jamón"
    food6Text.textContent = "Migas murcianas"

    food1.appendChild(food1Text)
    food2.appendChild(food2Text)
    food3.appendChild(food3Text)
    food4.appendChild(food4Text)
    food5.appendChild(food5Text)
    food6.appendChild(food6Text)

    menuGrid.appendChild(food1);
    menuGrid.appendChild(food2);
    menuGrid.appendChild(food3);
    menuGrid.appendChild(food4);
    menuGrid.appendChild(food5);
    menuGrid.appendChild(food6);

    menuDiv.appendChild(menuGrid)

    contentDiv.appendChild(menuDiv);
}