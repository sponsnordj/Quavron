const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

require("dotenv").config();

/* ========================================
IMPORT ROUTES
======================================== */

const authRoutes =
require("./routes/auth");

const userRoutes =
require("./routes/users");

const searchRoutes =
require("./routes/search");

const notificationsRoutes =
require("./routes/notifications-real");

const storageRoutes =
require("./routes/storage");

const deployRoutes =
require("./routes/deploy");

const terminalRoutes =
require("./routes/terminal-real");

const githubRoutes =
require("./routes/github");

const gitRoutes =
require("./routes/git");

const databaseRoutes =
require("./routes/database");

const aiRoutes =
require("./routes/ai");

const extensionsRoutes =
require("./routes/extensions");

const collaborationRoutes =
require("./routes/collaboration");

const analyticsRoutes =
require("./routes/analytics-real");

const projectsRoutes =
require("./routes/projects");

const filesRoutes =
require("./routes/files");

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

company: "Quavron",

branch: "ALGERIEN",

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
API ROUTES
======================================== */

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/users",
userRoutes
);

app.use(
"/api/search",
searchRoutes
);

app.use(
"/api/notifications",
notificationsRoutes
);

app.use(
"/api/storage",
storageRoutes
);

app.use(
"/api/deploy",
deployRoutes
);

app.use(
"/api/terminal",
terminalRoutes
);

app.use(
"/api/github",
githubRoutes
);

app.use(
"/api/git",
gitRoutes
);

app.use(
"/api/database",
databaseRoutes
);

app.use(
"/api/ai",
aiRoutes
);

app.use(
"/api/extensions",
extensionsRoutes
);

app.use(
"/api/collaboration",
collaborationRoutes
);

app.use(
"/api/analytics",
analyticsRoutes
);

app.use(
"/api/projects",
projectsRoutes
);

app.use(
"/api/files",
filesRoutes
);

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
ERROR HANDLER
======================================== */

app.use((err, req, res, next) => {

console.error(err);

res.status(500).json({

success: false,

message: "Internal Server Error"

});

});

/* ========================================
EXPORT APP
======================================== */

module.exports = app;
app.get("/favicon.ico", (req, res) => {
  res.status(204);
});
