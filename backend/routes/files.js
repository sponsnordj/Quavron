const express = require("express");

const router = express.Router();

/* ========================================
TEMP FILE SYSTEM
======================================== */

let files = [

{
id: 1,
name: "index.js",
type: "file",
language: "javascript",
content: "console.log('Hello Quavron');",
createdAt: new Date()
},

{
id: 2,
name: "styles.css",
type: "file",
language: "css",
content: "body { background: #000; }",
createdAt: new Date()
},

{
id: 3,
name: "components",
type: "folder",
createdAt: new Date()
}

];

/* ========================================
GET ALL FILES
======================================== */

router.get("/", (req, res) => {

res.json({

success: true,

total: files.length,

files

});

});

/* ========================================
GET SINGLE FILE
======================================== */

router.get("/:id", (req, res) => {

const file =
files.find(
item => item.id == req.params.id
);

if (!file) {

return res.status(404).json({

  success: false,

  message: "File Not Found"

});

}

res.json({

success: true,

file

});

});

/* ========================================
CREATE FILE
======================================== */

router.post("/create", (req, res) => {

const {

name,

language,

content

} = req.body;

if (!name) {

return res.status(400).json({

  success: false,

  message: "File name required"

});

}

const newFile = {

id: Date.now(),

name,

type: "file",

language: language || "text",

content: content || "",

createdAt: new Date()

};

files.unshift(newFile);

res.json({

success: true,

message: "File created successfully",

file: newFile

});

});

/* ========================================
CREATE FOLDER
======================================== */

router.post("/folder", (req, res) => {

const {

name

} = req.body;

if (!name) {

return res.status(400).json({

  success: false,

  message: "Folder name required"

});

}

const newFolder = {

id: Date.now(),

name,

type: "folder",

createdAt: new Date()

};

files.unshift(newFolder);

res.json({

success: true,

message: "Folder created successfully",

folder: newFolder

});

});

/* ========================================
UPDATE FILE
======================================== */

router.put("/:id", (req, res) => {

const file =
files.find(
item => item.id == req.params.id
);

if (!file) {

return res.status(404).json({

  success: false,

  message: "File Not Found"

});

}

file.name =
req.body.name || file.name;

file.content =
req.body.content || file.content;

file.language =
req.body.language || file.language;

res.json({

success: true,

message: "File updated successfully",

file

});

});

/* ========================================
DELETE FILE
======================================== */

router.delete("/:id", (req, res) => {

const index =
files.findIndex(
item => item.id == req.params.id
);

if (index === -1) {

return res.status(404).json({

  success: false,

  message: "File Not Found"

});

}

const deletedFile =
files.splice(index, 1);

res.json({

success: true,

message: "File deleted successfully",

deletedFile

});

});

/* ========================================
FILE SEARCH
======================================== */

router.get("/search/query", (req, res) => {

const query =
req.query.q?.toLowerCase() || "";

const results =
files.filter(file =>
file.name
.toLowerCase()
.includes(query)
);

res.json({

success: true,

total: results.length,

results

});

});

/* ========================================
RECENT FILES
======================================== */

router.get("/recent/all", (req, res) => {

const recentFiles =
files.slice(0, 5);

res.json({

success: true,

recentFiles

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
