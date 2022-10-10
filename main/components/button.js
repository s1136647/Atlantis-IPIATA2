export const getButton = (message) => {
    const parentElement = document.createElement("div");
    parentElement.innerHTML = `<button><a>${message}</a></button>`;
    console.log(parentElement);
    return parentElement;
}