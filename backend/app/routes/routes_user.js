const {check, validationResult } = require("express-validator");
const { registerUserController, loginController, getAllUsersController } = require("../controllers/user_controller");

const { verifyJWT } = require("../../utils");

module.exports = {
  loginUser: function (app, bcrypt, jwt) {
    app.post("/login",
    [check('email').isEmail().withMessage('Campo deve ser prrenchido com email valido.')],
    async (req, res) => {

      let erros = validationResult(req);
      loginController(app, req, res, erros);
    });
  },

  registerUser: function (app, bcrypt) {
    app.post("/register-user", verifyJWT, async function (req, res) {
      registerUserController(app, req, res);
    });
  },

  users: function (app) {
    app.get("/users", (req, res) => {
      getAllUsersController(app, req, res);
    });
  },
};
