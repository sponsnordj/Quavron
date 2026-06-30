const express = require("express");

const router = express.Router();

/* ========================================
TEMP EXTENSIONS STORAGE
======================================== */

let extensions = [

{
id: 1,
name: "Prettier",
category: "formatter",
installed: true,
downloads: 1200000,
version: "1.0.0"
},

{
id: 2,
name: "GitHub Copilot",
category: "ai",
installed: false,
downloads: 5400000,
version: "2.1.0"
},

{
id: 3,
name: "Material Theme",
category: "theme",
installed: true,
downloads: 870000,
version: "5.2.0"
}

];

/* ========================================
GET ALL EXTENSIONS
======================================== */

router.get("/", (req, res) => {

res.json({

success: true,

total: extensions.length,

extensions

});

});

/* ========================================
GET SINGLE EXTENSION
======================================== */

router.get("/:id", (req, res) => {

const extension =
extensions.find(
item => item.id == req.params.id
);

if (!extension) {

return res.status(404).json({

  success: false,

  message: "Extension Not Found"

});

}

res.json({

success: true,

extension

});

});

/* ========================================
INSTALL EXTENSION
======================================== */

router.post("/:id/install", (req, res) => {

const extension =
extensions.find(
item => item.id == req.params.id
);

if (!extension) {

return res.status(404).json({

  success: false,

  message: "Extension Not Found"

});

}

extension.installed = true;

res.json({

success: true,

message: "Extension installed successfully",

extension

});

});

/* ========================================
UNINSTALL EXTENSION
======================================== */

router.post("/:id/uninstall", (req, res) => {

const extension =
extensions.find(
item => item.id == req.params.id
);

if (!extension) {

return res.status(404).json({

  success: false,

  message: "Extension Not Found"

});

}

extension.installed = false;

res.json({

success: true,

message: "Extension uninstalled successfully",

extension

});

});

/* ========================================
SEARCH EXTENSIONS
======================================== */

router.get("/search/query", (req, res) => {

const query =
req.query.q?.toLowerCase() || "";

const results =
extensions.filter(extension =>
extension.name
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
GET CATEGORIES
======================================== */

router.get("/categories/all", (req, res) => {

res.json({

success: true,

categories: [

  "ai",

  "formatter",

  "theme",

  "language",

  "productivity",

  "database",

  "testing"

]

});

});

/* ========================================
CREATE CUSTOM EXTENSION
======================================== */

router.post("/create", (req, res) => {

const {

name,

category,

version

} = req.body;

if (!name) {

return res.status(400).json({

  success: false,

  message: "Extension name required"

});

}

const newExtension = {

id: Date.now(),

name,

category: category || "custom",

installed: false,

downloads: 0,

version: version || "1.0.0"

};

extensions.unshift(newExtension);

res.json({

success: true,

message: "Extension created successfully",

extension: newExtension

});

});

/* ========================================
DELETE EXTENSION
======================================== */

router.delete("/:id", (req, res) => {

const index =
extensions.findIndex(
item => item.id == req.params.id
);

if (index === -1) {

return res.status(404).json({

  success: false,

  message: "Extension Not Found"

});

}

const deletedExtension =
extensions.splice(index, 1);

res.json({

success: true,

message: "Extension deleted successfully",

deletedExtension

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
