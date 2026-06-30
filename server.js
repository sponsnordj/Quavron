const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

require("dotenv").config();

/* ========================================
IMPORT ROUTES
======================================== */

const authRoutes =
require("./backend/routes/auth");

const userRoutes =
require("./backend/routes/users");

const searchRoutes =
require("./backend/routes/search");

const notificationsRoutes =
require("./backend/routes/notifications-real");

const storageRoutes =
require("./backend/routes/storage");

const deployRoutes =
require("./backend/routes/deploy");

const terminalRoutes =
require("./backend/routes/terminal-real");

const githubRoutes =
require("./backend/routes/github");

const gitRoutes =
require("./backend/routes/git");

const databaseRoutes =
require("./backend/routes/database");

const aiRoutes =
require("./backend/routes/ai");

const extensionsRoutes =
require("./backend/routes/extensions");

const collaborationRoutes =
require("./backend/routes/collaboration");

const analyticsRoutes =
require("./backend/routes/analytics-real");

const projectsRoutes =
require("./backend/routes/projects");

const filesRoutes =
require("./backend/routes/files");

/* ========================================
APP
======================================== */

const app = express();

/* ========================================
MIDDLEWARE
======================================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({

extended: true

}));

app.use(morgan("dev"));

/* ========================================
ROOT
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
TEST
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
