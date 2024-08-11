console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("views", "ejs");

// 4: Routine code
app.get("/hello", function (req, res) {
  res.end(`<h1>HELLO WORLD by David</h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1>Siz so'vg'alar bo'limidasiz</h1>`);
});

app.get("/MIT17", function (req, res) {
  res.end(`<h1>MITga hush kelibsiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successully on port: ${PORT}`);
});
