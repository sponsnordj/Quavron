const express = require("express");

const router = express.Router();

/* ========================================
TEMP COLLABORATION STORAGE
======================================== */

let sessions = [

{
id: 1,
project: "Quavron IDE",
owner: "ALGERIEN",
collaborators: [

  "Developer",

  "Designer"

],

active: true,

createdAt: new Date()

}

];

/* ========================================
GET ALL SESSIONS
======================================== */

router.get("/", (req, res) => {

res.json({

success: true,

total: sessions.length,

sessions

});

});

/* ========================================
GET SINGLE SESSION
======================================== */

router.get("/:id", (req, res) => {

const session =
sessions.find(
item => item.id == req.params.id
);

if (!session) {

return res.status(404).json({

  success: false,

  message: "Session Not Found"

});

}

res.json({

success: true,

session

});

});

/* ========================================
CREATE SESSION
======================================== */

router.post("/create", (req, res) => {

const {

project,

owner

} = req.body;

if (
!project ||
!owner
) {

return res.status(400).json({

  success: false,

  message: "Project and owner required"

});

}

const newSession = {

id: Date.now(),

project,

owner,

collaborators: [],

active: true,

createdAt: new Date()

};

sessions.unshift(newSession);

res.json({

success: true,

message: "Collaboration session created",

session: newSession

});

});

/* ========================================
INVITE USER
======================================== */

router.post("/:id/invite", (req, res) => {

const session =
sessions.find(
item => item.id == req.params.id
);

if (!session) {

return res.status(404).json({

  success: false,

  message: "Session Not Found"

});

}

const {

username

} = req.body;

if (!username) {

return res.status(400).json({

  success: false,

  message: "Username required"

});

}

session.collaborators.push(username);

res.json({

success: true,

message: "User invited successfully",

collaborators: session.collaborators

});

});

/* ========================================
REMOVE USER
======================================== */

router.post("/:id/remove", (req, res) => {

const session =
sessions.find(
item => item.id == req.params.id
);

if (!session) {

return res.status(404).json({

  success: false,

  message: "Session Not Found"

});

}

const {

username

} = req.body;

session.collaborators =
session.collaborators.filter(
user => user !== username
);

res.json({

success: true,

message: "User removed successfully",

collaborators: session.collaborators

});

});

/* ========================================
SESSION STATUS
======================================== */

router.get("/:id/status", (req, res) => {

const session =
sessions.find(
item => item.id == req.params.id
);

if (!session) {

return res.status(404).json({

  success: false,

  message: "Session Not Found"

});

}

res.json({

success: true,

status: {

  active: session.active,

  onlineUsers:
    session.collaborators.length + 1,

  project: session.project

}

});

});

/* ========================================
END SESSION
======================================== */

router.put("/:id/end", (req, res) => {

const session =
sessions.find(
item => item.id == req.params.id
);

if (!session) {

return res.status(404).json({

  success: false,

  message: "Session Not Found"

});

}

session.active = false;

res.json({

success: true,

message: "Session ended successfully",

session

});

});

/* ========================================
DELETE SESSION
======================================== */

router.delete("/:id", (req, res) => {

const index =
sessions.findIndex(
item => item.id == req.params.id
);

if (index === -1) {

return res.status(404).json({

  success: false,

  message: "Session Not Found"

});

}

const deletedSession =
sessions.splice(index, 1);

res.json({

success: true,

message: "Session deleted successfully",

deletedSession

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
