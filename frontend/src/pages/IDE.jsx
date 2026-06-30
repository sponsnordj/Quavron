import { useState } from "react";
import Editor from "@monaco-editor/react";

function IDE() {

  const defaultFiles = {
    "App.jsx": `export default function App() {

  return (
    <h1>
      Welcome To Quavron 🚀
    </h1>
  );

}`
  };

  const [files, setFiles] =
    useState(defaultFiles);

  const [activeFile, setActiveFile] =
    useState("App.jsx");

  const [code, setCode] =
    useState(defaultFiles["App.jsx"]);

  const [prompt, setPrompt] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        role: "ai",
        text: "Welcome to Quavron AI 🚀"
      }
    ]);

  /* OPEN FILE */

  const openFile = (file) => {
    setActiveFile(file);
    setCode(files[file]);
  };

  /* AI GENERATOR */

  const generateCode = () => {

    if (!prompt) return;

    let generated = "";

    /* LOGIN */

    if (
      prompt.toLowerCase().includes("login")
    ) {

      generated = `export default function Login() {

  return (

    <div className="login-page">

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button>
        Login
      </button>

    </div>

  );

}`;

    }

    /* DASHBOARD */

    else if (
      prompt.toLowerCase().includes("dashboard")
    ) {

      generated = `export default function Dashboard() {

  return (

    <div>

      <h1>Dashboard UI 🚀</h1>

    </div>

  );

}`;
    }

    /* DEFAULT */

    else {

      generated = `// AI Generated Component

export default function Component() {

  return (
    <div>
      New Component 🚀
    </div>
  );

}`;
    }

    /* UPDATE EDITOR */

    setCode(generated);

    /* ADD MESSAGE */

    setMessages([
      ...messages,
      {
        role: "user",
        text: prompt
      },
      {
        role: "ai",
        text: "Generating component..."
      }
    ]);

    setPrompt("");
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

          </div>

        </div>

      </div>

      {/* AI */}

      <div className="ai-sidebar">

        <div className="ai-header">
          🤖 Quavron AI
        </div>

        <div className="ai-chat">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={
                msg.role === "user"
                  ? "ai-message user"
                  : "ai-message"
              }
            >
              <strong>
                {msg.role === "user"
                  ? "You"
                  : "AI"}:
              </strong>

              {" "}
              {msg.text}

            </div>

          ))}

        </div>

        <div className="ai-input">

          <input
            type="text"
            placeholder="Ask Quavron AI..."
            value={prompt}
            onChange={(e) =>
              setPrompt(e.target.value)
            }
          />

          <button onClick={generateCode}>
            Send
          </button>

        </div>

      </div>

    </div>

  );
}

export default IDE;
