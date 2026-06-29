console.log("🧠 Quavron IDE Loaded");

/* ========================================
Monaco Editor
======================================== */

require.config({
paths: {
vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.2/min/vs"
}
});

require(["vs/editor/editor.main"], function () {

window.editor = monaco.editor.create(
document.getElementById("editor"),
{

  value: `<!DOCTYPE html>

<html>
<head>
  <title>Quavron</title>
</head>
<body>  <h1>Hello From Quavron 🚀</h1></body>
</html>`,  language: "html",

  theme: "vs-dark",

  automaticLayout: true,

  fontSize: 16,

  minimap: {
    enabled: true
  }

}

);

});

/* ========================================
Buttons
======================================== */

document
.getElementById("run-btn")
.addEventListener("click", () => {

alert("Run System Coming Soon 🚀");

});

document
.getElementById("save-btn")
.addEventListener("click", () => {

const code = window.editor.getValue();

console.log(code);

alert("Code Saved");

});

document
.getElementById("deploy-btn")
.addEventListener("click", () => {

alert("Deploy System Coming Soon 🚀");

});

/* ========================================
File Explorer
======================================== */

const fileItems = document.querySelectorAll(".file-item");

fileItems.forEach(file => {

file.addEventListener("click", () => {

fileItems.forEach(item => {
  item.classList.remove("active-file");
});

file.classList.add("active-file");

});

});
