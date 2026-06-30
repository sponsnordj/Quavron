import { useState } from "react";

import Editor from "@monaco-editor/react";

function IDE() {

const [activeFile, setActiveFile] =
useState("App.jsx");

const files = {

"App.jsx":

`export default function App() {

return (

<h1>
  Welcome To Quavron 🚀
</h1>

);

}`,

"main.jsx":

`import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(
document.getElementById("root")
).render(

  <App />);`,

"style.css":

`body {

background: #0f172a;

color: white;

}`

};

return (

<div>

  <h1>💻 Cloud IDE</h1>

  <p>
    AI Powered Development Environment
  </p>

  <div className="ide-layout">

    {/* FILES */}

    <aside className="ide-sidebar">

      <h3>FILES</h3>

      {Object.keys(files).map((file) => (

        <div
          key={file}
          className={
            activeFile === file
            ? "file active-file"
            : "file"
          }

          onClick={() =>
            setActiveFile(file)
          }
        >

          📄 {file}

        </div>

      ))}

    </aside>

    {/* EDITOR */}

    <div className="ide-editor">

      {/* TABS */}

      <div className="tabs">

        <div className="tab active-tab">

          {activeFile}

        </div>

      </div>

      {/* MONACO */}

      <Editor
        height="500px"
        theme="vs-dark"
        defaultLanguage="javascript"
        value={files[activeFile]}
      />

      {/* TERMINAL */}
{/* AI WORKSPACE */}

<div className="ai-workspace">  <div className="ai-header">🤖 Quavron AI

  </div>  <div className="ai-chat"><div className="ai-msg ai">

  <strong>AI:</strong>

  Welcome to Quavron AI 🚀

</div>

<div className="ai-msg user">

  <strong>You:</strong>

  Create React Login Page

</div>

<div className="ai-msg ai">

  <strong>AI:</strong>

  Generating secure login component...

</div>

  </div>  <div className="ai-input-box"><input
  type="text"
  placeholder="Ask Quavron AI..."
/>

<button>

  Send

</button>

  </div></div>
      <div className="terminal">

        <div className="terminal-header">

          TERMINAL

        </div>

        <div className="terminal-body">

          <p>
            user@quavron:~$ npm run dev
          </p>

          <p>
            VITE v5.4 ready 🚀
          </p>

        </div>

      </div>

    </div>

  </div>

</div>

);

}

export default IDE;
