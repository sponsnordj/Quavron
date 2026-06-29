const express = require("express"); const cors = require("cors"); const path = require("path");

const app = express();

app.use(cors());

app.use(express.json()); app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/pages", express.static(path.join(__dirname, "pages"))); app.use("/js", express.static(path.join(__dirname, "js"))); app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => { res.sendFile(path.join(__dirname, "pages", "index.html")); });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(🚀 Quavron Server Running On Port ${PORT}); });
