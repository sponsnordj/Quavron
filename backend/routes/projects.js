const express = require("express");

const router = express.Router();

/* ========================================
TEMP DATABASE
======================================== */

let projects = [

{
id: 1,
name: "Quavron IDE",
description: "Cloud Development Platform"
},

{
id: 2,
name: "Portfolio Website",
description: "Personal Portfolio Project"
}

];

/* ========================================
GET ALL PROJECTS
======================================== */

router.get("/", (req, res) => {

res.json({
success: true,
total: projects.length,
projects
});

});

/* ========================================
GET SINGLE PROJECT
======================================== */

router.get("/:id", (req, res) => {

const project = projects.find(
p => p.id == req.params.id
);

if (!project) {

return res.status(404).json({
  success: false,
  message: "Project Not Found"
});

}

res.json({
success: true,
project
});

});

/* ========================================
CREATE PROJECT
======================================== */

router.post("/create", (req, res) => {

const { name, description } = req.body;

const newProject = {

id: Date.now(),

name,

description

};

projects.push(newProject);

res.json({
success: true,
message: "Project Created Successfully",
project: newProject
});

});

/* ========================================
UPDATE PROJECT
======================================== */

router.put("/:id", (req, res) => {

const project = projects.find(
p => p.id == req.params.id
);

if (!project) {

return res.status(404).json({
  success: false,
  message: "Project Not Found"
});

}

project.name =
req.body.name || project.name;

project.description =
req.body.description || project.description;

res.json({
success: true,
message: "Project Updated",
project
});

});

/* ========================================
DELETE PROJECT
======================================== */

router.delete("/:id", (req, res) => {

const projectIndex = projects.findIndex(
p => p.id == req.params.id
);

if (projectIndex === -1) {

return res.status(404).json({
  success: false,
  message: "Project Not Found"
});

}

const deletedProject =
projects.splice(projectIndex, 1);

res.json({
success: true,
message: "Project Deleted",
deletedProject
});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
