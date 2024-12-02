
export default function createImg(img, where) {
    let imgElement = document.createElement("IMG");
    imgElement.setAttribute("src", `${img}`);
    imgElement.setAttribute("width", "10");
    imgElement.setAttribute("height", "10");
    imgElement.setAttribute("alt", "cross");
    imgElement.setAttribute("class", "divCross");
    where.appendChild(imgElement);
}
