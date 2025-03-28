const loadHomePage = function() {
    const contentDiv = document.querySelector("#content");
    contentDiv.textContent = "";
    const paragraphText = `Frisch, saftig und voller Geschmack – bei uns gibt es den
                    besten Döner der Stadt! Ob klassisch mit zart gegrilltem
                    Fleisch, vegetarisch mit würzigem Falafel oder vegan mit
                    knackigem Gemüse – wir bereiten alles mit Liebe und den
                    besten Zutaten für Dich zu. Genieße hausgemachte Saucen,
                    frisches Brot und eine Atmosphäre, die Dich wie zuhause
                    fühlen lässt. Komm vorbei und überzeuge Dich selbst!`;
    const headerText = "Amed Grillhaus";

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("hero");
    
    const header = document.createElement("h1");
    header.textContent = headerText; 

    const paragraph = document.createElement("p");
    paragraph.textContent =  paragraphText;

    containerDiv.appendChild(header);
    containerDiv.appendChild(paragraph);

    contentDiv.appendChild(containerDiv);
};

export default loadHomePage;