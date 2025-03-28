const products = [
    {
        name: "Döner",
        description: "im Fladenbrot mit Fleisch, Salat & Soße",
        price: 6,
    },
    {
        name: "Chickendöner",
        description: "im Fladenbrot mit Schnitzel, Salat & Soße",
        price: 6.0,
    },
    {
        name: "Döner Käse",
        description: "im Fladenbrot mit Fleisch, Käse, Salat & Soße",
        price: 6.50,
    },
    {
        name: "Döner Teller",
        description: "mit Fleisch, Pommes, Salat & Soße",
        price: 10.0,
    },
    {
        name: "Dürüm Döner",
        description: "in Teigrolle mit Fleisch, Salat & Soße",
        price: 6.50,
    },
    {
        name: "Türkische Pizza",
        description: "mit Salat & Soße",
        price: 5,
    },
];


function formatPrice(price) {
    return `${price.toFixed(2)} $`;
}

function createMenuItem(menuItem) {
    const container = document.createElement("div");
    container.classList.add("menuItem");

    const productHeader = document.createElement("h3");
    productHeader.textContent = menuItem.name;

    const productParagraph = document.createElement("p");
    productParagraph.textContent = menuItem.description;

    const productPrice = document.createElement("span");
    productPrice.textContent = formatPrice(menuItem.price);
    
    container.appendChild(productHeader);
    container.appendChild(productParagraph);
    container.appendChild(productPrice);
    return container;
}

export function loadMenuPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");

    for (const product of products) {
        menuContainer.appendChild(createMenuItem(product));
    }
    contentDiv.appendChild(menuContainer);
}