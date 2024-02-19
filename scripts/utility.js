
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-400');
}

function getElementInnerTextById (elementId) {
    const element = document.getElementById(elementId).innerText;
    return element
}

function getElementById (elementId) {
    const element = document.getElementById(elementId);
    return element
}

function setElementInnerTextById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function removeAttributeDisabled (elementId) {
    const element = document.getElementById(elementId);
    element.removeAttribute('disabled');
}
function addAttributeDisabled (elementId) {
    const element = document.getElementById(elementId);
    element.setAttribute('disabled');
}

function removeAttributeHidden (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.style.display = 'none';
}

function hideElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}