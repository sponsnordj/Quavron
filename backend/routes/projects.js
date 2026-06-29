const express = require("express");

const router = express.Router();

/* ========================================
Get Projects
======================================== */

router.get("/", (req, res) => {

res.json({
success: true,
projects: []
});

});

/* ========================================
Create Project
======================================== */

router.post("/create", (req, res) => {

res.json({
success: true,
message: "Project Created"
});

});

module.exports = router;
