const express = require("express");

const router = express.Router();

/* ========================================
TEMP NOTIFICATIONS STORAGE
======================================== */

let notifications = [

{
id: 1,
title: "Project Deployed",
message: "Your project was deployed successfully 🚀",
type: "success",
read: false,
createdAt: new Date()
},

{
id: 2,
title: "AI Assistant",
message: "New AI features available 🤖",
type: "info",
read: false,
createdAt: new Date()
}

];

/* ========================================
GET ALL NOTIFICATIONS
======================================== */

router.get("/", (req, res) => {

res.json({

success: true,

total: notifications.length,

notifications

});

});

/* ========================================
GET SINGLE NOTIFICATION
======================================== */

router.get("/:id", (req, res) => {

const notification =
notifications.find(
item => item.id == req.params.id
);

if (!notification) {

return res.status(404).json({

  success: false,

  message: "Notification Not Found"

});

}

res.json({

success: true,

notification

});

});

/* ========================================
CREATE NOTIFICATION
======================================== */

router.post("/create", (req, res) => {

const {

title,

message,

type

} = req.body;

if (
!title ||
!message
) {

return res.status(400).json({

  success: false,

  message: "Title and message required"

});

}

const newNotification = {

id: Date.now(),

title,

message,

type: type || "info",

read: false,

createdAt: new Date()

};

notifications.unshift(newNotification);

res.json({

success: true,

message: "Notification created",

notification: newNotification

});

});

/* ========================================
MARK AS READ
======================================== */

router.put("/:id/read", (req, res) => {

const notification =
notifications.find(
item => item.id == req.params.id
);

if (!notification) {

return res.status(404).json({

  success: false,

  message: "Notification Not Found"

});

}

notification.read = true;

res.json({

success: true,

message: "Notification marked as read",

notification

});

});

/* ========================================
DELETE NOTIFICATION
======================================== */

router.delete("/:id", (req, res) => {

const index =
notifications.findIndex(
item => item.id == req.params.id
);

if (index === -1) {

return res.status(404).json({

  success: false,

  message: "Notification Not Found"

});

}

const deletedNotification =
notifications.splice(index, 1);

res.json({

success: true,

message: "Notification deleted",

deletedNotification

});

});

/* ========================================
CLEAR ALL
======================================== */

router.delete("/", (req, res) => {

notifications = [];

res.json({

success: true,

message: "All notifications cleared"

});

});

/* ========================================
EXPORT
======================================== */

module.exports = router;
