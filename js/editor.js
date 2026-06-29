
console.log("🧠 Quavron IDE Loaded");

/* ========================================
Fake File Explorer System
======================================== */

const fileItems = document.querySelectorAll(".file-item");

fileItems.forEach(file => {

file.addEventListener("click", () => {

fileItems.forEach(item => {
  item.classList.remove("active-file");
});

file.classList.add("active-file");

console.log("Opened:", file.innerText);

});

});

/* ========================================
Fake Run Button
======================================== */

const buttons = document.querySelectorAll(".editor-topbar button");

buttons.forEach(button => {

button.addEventListener("click", () => {

console.log(button.innerText + " Clicked");

});

});

/* ========================================
Monaco Editor Placeholder
======================================== */

function initializeEditor() {

console.log("Monaco Editor Will Initialize Here");

}

initializeEditor();
