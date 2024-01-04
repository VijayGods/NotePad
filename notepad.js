let txt = document.getElementById("txt");
let info = document.getElementById("info");

function upperCase() {
    txt.value = txt.value.toUpperCase();
}

function lowerCase() {
    txt.value = txt.value.toLowerCase();
}

function bold() {
    txt.style.fontWeight = "bold";
}

function normal() {
    txt.style.fontWeight = "normal";
}

function search() {
    let str = prompt("Enter the String to search");
    let text = txt.value;
    console.log(text);
    if (text.includes(str)) {
        alert(`Yes ${str} is present`);
    } else {
        alert(`${str} is not present`);
    }
}

function updateInfo() {
    let text = txt.value;
    info.innerHTML = `Your text contains ${text.split(' ').length} words and ${text.length} characters`;
}

function alignLeft() {
    txt.style.textAlign = "left";
}

function alignRight() {
    txt.style.textAlign = "right";
}

function alignCenter() {
    txt.style.textAlign = "center";
}

function capitalize() {
    txt.style.textTransform = "capitalize";
}

function smallCaps() {
    txt.style.fontVariant = "small-caps";
}

function changeFont() {
    let fontSelector = document.getElementById("fonts");
    txt.style.fontFamily = fontSelector.value;
}