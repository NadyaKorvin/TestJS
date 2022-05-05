const express = require("express");
const setting = require("./setting");
const app = express();
const port = 3001;
const host = "localhost";

const pug = require("pug");

// app.use("/templates", express.static(__dirname + "/templates"));

app.get("/", (req, res) => {
  const compiledFunction = pug.compileFile("templates/index.pug");
  const resp = compiledFunction();
  res.send(resp);
});

app.get("/user/quest:page", (req, res) => {
  let page = parseInt(req.params.page);
  page = page <= 5 && page > 0 ? page : 1;
  let resp = pug.compileFile("templates/quest_" + page + ".pug");
  res.send(resp);
});

app.listen(port, host, () => {
  console.log(`Сервер запущен по адресу http://${host}:${port}/`);
});
