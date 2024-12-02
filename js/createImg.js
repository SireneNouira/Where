import suppName from "./listNames.js";


export default function createImg(img, where) {
    let imgElement = document.createElement("IMG");
    imgElement.addEventListener("click", suppName);
    imgElement.setAttribute("src", `${img}`);
    imgElement.setAttribute("width", "15");
    imgElement.setAttribute("height", "15");
    imgElement.setAttribute("alt", "cross");
    imgElement.setAttribute("class", "divCross");
    where.appendChild(imgElement);
}
