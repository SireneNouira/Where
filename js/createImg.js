
export default function createImg(img, where) {
    let imgElement = document.createElement("IMG");
    imgElement.setAttribute("src", `${img}`);
    imgElement.setAttribute("width", "50");
    imgElement.setAttribute("height", "50");
    imgElement.setAttribute("alt", "cross");
    imgElement.setAttribute("class", "divCross");
    where.appendChild(imgElement);
}
