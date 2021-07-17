const dbConnection = require("./config/dbserver");
const connection = dbConnection();
const message = "Tivemos algum problema ao conectar o banco de dados!! ";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "TOKEN";

function verifyJWT(req, res, next) {
  const token = req.headers["authorization"];

  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).send({ message: "Usuário não autenticado!" });
    }

    console.log(req.user_id);
    req.user_id = decoded.user_id;
    next();
  });
}

module.exports = { connection, message, bcrypt, jwt, SECRET, verifyJWT };
