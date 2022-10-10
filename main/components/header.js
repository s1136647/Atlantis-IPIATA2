export const getHeader = (header, message) => {
    const parentElement = document.createElement("header");
    parentElement.innerHTML = `<h1>${header}</h1><p>${message}</p>`;
    console.log(parentElement);
    return parentElement;
}