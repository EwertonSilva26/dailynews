const { registerUserController, verifyUserController, loginController, getAllUsersController } = require("../controllers/user_controller");

const { verifyJWT } = require("../../utils");

module.exports = {
  loginUser: function (app, bcrypt, jwt) {
    app.post("/login", async (req, res) => {
      loginController(app, req, res);
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
