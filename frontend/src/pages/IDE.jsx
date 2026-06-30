import { useState } from "react";
import Editor from "@monaco-editor/react";

function IDE() {

  const files = {
    "App.jsx": `export default function App() {

  return (
    <h1>
      Welcome To Quavron 🚀
    </h1>
  );

}`,

    "main.jsx": `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(
  document.getElementById("root")
).render(<App />);`,

    "style.css": `body {
  background: #0f172a;
  color: white;
}`,

    "package.json": `{
  "name": "quavron"
}`
  };

  const [activeFile, setActiveFile] =
    useState("App.jsx");

  const [code, setCode] =
    useState(files["App.jsx"]);

  const openFile = (file) => {
    setActiveFile(file);
    setCode(files[file]);
  };

  return (

    <div className="ide-layout">

      {/* FILES */}

      <div className="files-panel">

        <h3>FILES</h3>

        {Object.keys(files).map((file) => (

          <div
            key={file}
            className={
              activeFile === file
                ? "file active"
                : "file"
            }
            onClick={() => openFile(file)}
          >
            📄 {file}
          </div>

        ))}

      </div>

      {/* EDITOR */}

      <div className="editor-panel">

        <div className="editor-topbar">

          <span>{activeFile}</span>

          <button className="run-btn">
            ▶ Run
          </button>

        </div>

        <Editor
          height="500px"
          language="javascript"
          theme="vs-dark"
          value={code}
          onChange={(value) =>
            setCode(value)
          }
        />

        {/* TERMINAL */}

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

            <p>
              localhost:5173 running...
            </p>

          </div>

        </div>

      </div>

      {/* AI */}

      <div className="ai-sidebar">

        <div className="ai-header">
          🤖 Quavron AI
        </div>

        <div className="ai-chat">

          <div className="ai-message">
            AI: Welcome to Quavron 🚀
          </div>

          <div className="ai-message user">
            You: Create Login Page
          </div>

          <div className="ai-message">
            AI: Generating React Component...
          </div>

        </div>

        <div className="ai-input">

          <input
            type="text"
            placeholder="Ask Quavron AI..."
          />

          <button>
            Send
          </button>

        </div>

      </div>

    </div>

  );
}

export default IDE;
