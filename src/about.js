import mapImage from "./assets/maps.png.jpg";
const telNumber = '123456789';
const email = "Amed-Grillhaus@icloud.com"

export function aboutPage() {
    const aboutContainerDiv = document.createElement('div');
    aboutContainerDiv.classList.add("aboutContainer");

    const phoneSpan = document.createElement("span");
    phoneSpan.textContent = `Phone number: ${telNumber}`;

    const emailSpan = document.createElement("span");
    emailSpan.textContent = `E-mail: ${email}`;

    const mapImageElement = document.createElement("img");
    mapImageElement.src = mapImage;

    aboutContainerDiv.appendChild(phoneSpan);
    aboutContainerDiv.appendChild(emailSpan);
    aboutContainerDiv.appendChild(mapImageElement);
    
    return aboutContainerDiv;
}