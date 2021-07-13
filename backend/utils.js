const dbConnection = require("./config/dbserver");
const connection = dbConnection();
const message = "Tivemos algum problema ao conectar o banco de dados!! ";

module.exports = { connection, message }