const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

require("dotenv").config();

const app = express();

/* ========================================
MIDDLEWARE
======================================== */

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

/* ========================================
ROOT
======================================== */

app.get("/", (req, res) => {

res.json({

success: true,

message: "Quavron Running 🚀"

});

});

/* ========================================
TEST
======================================== */

app.get("/api/test", (req, res) => {

res.json({

success: true,

message: "API Working ✅"

});

});

/* ========================================
EXPORT
======================================== */

module.exports = app;
