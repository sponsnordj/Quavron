import Editor from "@monaco-editor/react";

function IDE() {
  return (
    <div className="ide-layout">

      {/* LEFT FILES */}
      <div className="files-panel">

        <h3>FILES</h3>

        <div className="file active">
          📄 App.jsx
        </div>

        <div className="file">
          📄 main.jsx
        </div>

        <div className="file">
          📄 style.css
        </div>

        <div className="file">
          📄 package.json
        </div>

      </div>

      {/* CENTER EDITOR */}
      <div className="editor-panel">

        <div className="editor-topbar">
          <span>App.jsx</span>

          <button className="run-btn">
            ▶ Run
          </button>
        </div>

        <Editor
          height="500px"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue={`export default function App() {

  return (
    <h1>
      Welcome To Quavron 🚀
    </h1>
  );

}`}
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

      {/* RIGHT AI */}
      <div className="ai-sidebar">

        <div className="ai-header">
          🤖 Quavron AI
        </div>

        <div className="ai-chat">

          <div className="ai-message">
            AI: Welcome to Quavron AI 🚀
          </div>

          <div className="ai-message user">
            You: Create React Login Page
          </div>

          <div className="ai-message">
            AI: Generating secure login component...
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
