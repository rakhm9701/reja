console.log("Web Serverni boshlash");
const express = require("express");
// const res = require("express/lib/respone");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code

// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routine code

// app.get("/hello", function (req, res) {
//   res.send("<h1>HELLO WORLD by David</h1>");
// });

// app.get("/gift", function (req, res) {
//   res.send("<h1>Siz so'vg'alar bo'limidasiz</h1>");
// });

// app.get("/MIT17", function (req, res) {
//   res.send("<h1>MITga hush kelibsiz</h1>");
// });

app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
