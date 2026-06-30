const express = require("express");

const router = express.Router();

/* ========================================
TEMP AI HISTORY
======================================== */

let aiHistory = [

{
id: 1,
prompt: "Create a login form",
response: "Generated React login component",
type: "generate",
createdAt: new Date()
},

{
id: 2,
prompt: "Explain async await",
response: "Async/await simplifies asynchronous code",
type: "explain",
createdAt: new Date()
}

];

/* ========================================
GET AI HISTORY
======================================== */

router.get("/", (req, res) => {

res.json({

success: true,

total: aiHistory.length,

aiHistory

});

});

/* ========================================
AI CHAT
======================================== */

router.post("/chat", (req, res) => {

const {

message

} = req.body;

if (!message) {

return res.status(400).json({

  success: false,

  message: "Message is required"

});

}

const aiResponse = {

id: Date.now(),

prompt: message,

response:
  `AI Response for: ${message}`,

type: "chat",

createdAt: new Date()

};

aiHistory.unshift(aiResponse);

res.json({

success: true,

message: "AI response generated",

ai: aiResponse

});

});

/* ========================================
GENERATE CODE
======================================== */

router.post("/generate", (req, res) => {

const {

prompt,

language

} = req.body;

if (!prompt) {

return res.status(400).json({

  success: false,

  message: "Prompt required"

});

}

let generatedCode = "";

/* SIMPLE EXAMPLES */

if (language === "javascript") {

generatedCode =

`function hello() {

console.log("Hello Quavron");

}`;

}

else if (language === "python") {

generatedCode =

`def hello():

print("Hello Quavron")`;

}

else {

generatedCode =

"Generated code example";

}

const aiGeneration = {

id: Date.now(),

prompt,

response: generatedCode,

type: "generate",

createdAt: new Date()

};

aiHistory.unshift(aiGeneration);

res.json({

success: true,

generatedCode,

ai: aiGeneration

});

});

/* ========================================
EXPLAIN CODE
======================================== */

router.post("/explain", (req, res) => {

const {

code

} = req.body;

if (!code) {

return res.status(400).json({

  success: false,

  message: "Code required"

});

}

res.json({

success: true,

explanation:
  "This code executes a basic function and logs output."

});

});

/* ========================================
DEBUG CODE
======================================== */

router.post("/debug", (req, res) => {

const {

code

} = req.body;

if (!code) {

return res.status(400).json({

  success: false,

  message: "Code required"

});

}

res.json({

success: true,

issues: [

  "Possible undefined variable",

  "Missing semicolon",

  "Unused function"

]

});

});

/* ========================================
AI SUGGESTIONS
======================================== */

router.get("/suggestions", (req, res) => {

res.json({

success: true,

suggestions: [

  "Optimize your loops",

  "Use async/await",

  "Split components into modules",

  "Enable TypeScript strict mode"

]

});

});

/* ========================================
DELETE AI HISTORY
======================================== */

router.delete("/", (req, res) => {

aiHistory = [];

res.json({

success: true,

message: "AI history cleared"

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
