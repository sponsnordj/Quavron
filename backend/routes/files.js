const express = require("express");

const router = express.Router();

/* ========================================
Get Files
======================================== */

router.get("/", (req, res) => {

res.json({
success: true,
files: []
});

});

/* ========================================
Upload File
======================================== */

router.post("/upload", (req, res) => {

res.json({
success: true,
message: "File Uploaded"
});

});

module.exports = router;
