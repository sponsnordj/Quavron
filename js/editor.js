console.log("🧠 Quavron Editor Initialized");

/* ========================================
FILE EXPLORER
======================================== */

const fileItems = document.querySelectorAll(
".file-tree li"
);

fileItems.forEach(file => {

file.addEventListener("click", () => {

fileItems.forEach(item => {
  item.style.background = "transparent";
});

file.style.background = "#1e293b";

console.log(
  "Opened File:",
  file.innerText
);

});

});

/* ========================================
TABS SYSTEM
======================================== */

const tabs = document.querySelectorAll(
".tab"
);

tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(item => {
  item.classList.remove("active-tab");
});

tab.classList.add("active-tab");

console.log(
  "Active Tab:",
  tab.innerText
);

});

});

/* ========================================
CODE EDITOR
======================================== */

const codeEditor = document.querySelector(
".code-editor"
);

if (codeEditor) {

codeEditor.addEventListener(
"input",
() => {

  console.log(
    "Code Updated"
  );

}

);

}

/* ========================================
RUN BUTTON
======================================== */

const runButton = document.querySelector(
".run-btn"
);

if (runButton) {

runButton.addEventListener(
"click",
() => {

  appendTerminalMessage(
    "> Running project..."
  );

  setTimeout(() => {

    appendTerminalMessage(
      "> Project executed successfully 🚀"
    );

  }, 1000);

}

);

}

/* ========================================
SAVE BUTTON
======================================== */

const saveButton = document.querySelector(
".save-btn"
);

if (saveButton) {

saveButton.addEventListener(
"click",
() => {

  appendTerminalMessage(
    "> Project saved successfully 💾"
  );

}

);

}

/* ========================================
AI BUTTON
======================================== */

const aiButton = document.querySelector(
".ai-btn"
);

if (aiButton) {

aiButton.addEventListener(
"click",
() => {

  appendTerminalMessage(
    "> AI Assistant will be available soon 🤖"
  );

}

);

}

/* ========================================
TERMINAL SYSTEM
======================================== */

const terminalBody = document.querySelector(
".terminal-body"
);

function appendTerminalMessage(message) {

if (!terminalBody) return;

const line = document.createElement("p");

line.innerText = message;

terminalBody.appendChild(line);

terminalBody.scrollTop =
terminalBody.scrollHeight;

}

/* ========================================
SHORTCUTS
======================================== */

document.addEventListener(
"keydown",
(event) => {

/* CTRL + S */

if (
  event.ctrlKey &&
  event.key === "s"
) {

  event.preventDefault();

  appendTerminalMessage(
    "> CTRL + S detected — File saved 💾"
  );

}

/* CTRL + ENTER */

if (
  event.ctrlKey &&
  event.key === "Enter"
) {

  event.preventDefault();

  appendTerminalMessage(
    "> CTRL + ENTER detected — Running project 🚀"
  );

}

}
);

/* ========================================
AUTO SAVE PLACEHOLDER
======================================== */

setInterval(() => {

console.log(
"Auto-save checkpoint..."
);

}, 30000);

/* ========================================
INITIALIZATION
======================================== */

window.addEventListener("load", () => {

appendTerminalMessage(
"> Quavron IDE Ready"
);

});
