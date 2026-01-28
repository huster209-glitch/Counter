const heading = document.getElementById("number");
let history = document.getElementById("history");
let massiv = [];
let currentValue = parseInt(heading.textContent);

function incrementCounter() {
    currentValue++;
    heading.textContent = currentValue;
    updateColor(currentValue);
}

function decrementCounter() {
    currentValue--;
    heading.textContent = currentValue;
    updateColor(currentValue);
}

function toZero() {
    currentValue = 0;
    heading.textContent = currentValue;
    updateColor(currentValue);
}

function updateColor(value) {
    if(value > 0) heading.style.color = "green";
    else if(value < 0) heading.style.color = "red";
    else heading.style.color = "black";
}

// massiv.push(heading);