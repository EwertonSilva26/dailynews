const express = require("express");
var cors = require("cors");

const app = express();
const bodyParser = require("body-parser");
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, function () {
  console.log(`Servidor rodando com express na porta: ${port}.`);
});

module.exports = app;
