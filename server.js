const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

require("dotenv").config();

/* ========================================
APP
======================================== */

const app = express();

/* ========================================
GLOBAL MIDDLEWARE
======================================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({

extended: true

}));

app.use(morgan("dev"));

/* ========================================
ROOT ROUTE
======================================== */

app.get("/", (req, res) => {

res.json({

success: true,

name: "Quavron API",

version: "1.0.0",

status: "Running 🚀"

});

});

/* ========================================
TEST ROUTE
======================================== */

app.get("/api/test", (req, res) => {

res.json({

success: true,

message: "API Working Successfully ✅"

});

});

/* ========================================
404 HANDLER
======================================== */

app.use((req, res) => {

res.status(404).json({

success: false,

message: "Route Not Found"

});

});

/* ========================================
GLOBAL ERROR HANDLER
======================================== */

app.use((err, req, res, next) => {

console.error(err);

res.status(500).json({

success: false,

message: "Internal Server Error"
const authRoutes =
  require("./routes/auth");
});

});

/* ========================================
EXPORT APP
======================================== */

module.exports = app;
