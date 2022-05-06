const express = require("express");
const setting = require("./setting");
const app = express();
const port = 3001;
const host = "localhost";

const pug = require("pug");

app.get("/", (req, res) => {
  const compiledFunction = pug.compileFile("templates/index.pug");
  const resp = compiledFunction();
  res.send(resp);
});

app.get("/quest:page", (req, res) => {
  let page = parseInt(req.params.page);
  page = page <= 5 && page >= 1 ? page : 1;
  const compiledFunction = pug.compileFile("templates/quest_" + page + ".pug");
  const resp = compiledFunction();
  res.send(resp);
});

app.listen(port, host, () => {
  console.log(`Сервер запущен по адресу http://${host}:${port}/`);
});
