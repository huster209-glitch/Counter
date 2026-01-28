const heading = document.getElementById("number");
const tarix = document.getElementById("history");
const tarixMassiv = [];
let currentValue = parseInt(heading.textContent);

function incrementCounter() {
    currentValue++;
    heading.textContent = currentValue;
    updateColor(currentValue);
    showHistory(currentValue);
}

function decrementCounter() {
    currentValue--;
    heading.textContent = currentValue;
    updateColor(currentValue);
    showHistory(currentValue);
}

function toZero() {
    currentValue = 0;
    heading.textContent = currentValue;
    updateColor(currentValue);
    showHistory(currentValue);
}

function updateColor(value) {
    if(value > 0) heading.style.color = "green";
    else if(value < 0) heading.style.color = "red";
    else heading.style.color = "black";
}

function showHistory(son) {
    tarixMassiv.push(son);
    tarix.textContent = "Tarix: " + tarixMassiv.toString();
}