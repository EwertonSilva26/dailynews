const {
  getAllUfsController,
  getAllUsersController,
  getAllNewsController,
  getNewController,
  saveNewController,
  updateNewController,
  deleteNewController,
  getNewsByUfController,
  registerUserController,
  verifyUserController,
  responseLoginController,
} = require("../controllers/newscontroller");

// Criptgrafando senaha
const encryptPassword = async (password, bcrypt) => {
  const encrypted = await new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (errBcrypt, hash) => {
      if (errBcrypt) {
        reject(errBcrypt);
      } else {
        resolve(hash);
      }
    });
  });

  return encrypted;
};

// Descriptar senha
const decryptPassword = async (userPassword, password, bcrypt) => {
  const decrypted = await new Promise((resolve, reject) => {
    bcrypt.compare(userPassword, password, (errBcrypt, result) => {
      if (errBcrypt) {
        reject(errBcrypt);
      } else {
        resolve(result);
      }
    });
  });

  return decrypted;
};

module.exports = {
  loginUser: function (app, bcrypt, jwt) {
    app.post("/login", async (req, res) => {
      const result = await verifyUserController(app, req, res);

      const decripted = await decryptPassword(
        req.body.password,
        result[0].userPassword,
        bcrypt
      );

      responseLoginController(decripted, result, jwt, app, req, res);
    });
  },
  registerUser: function (app, bcrypt) {
    app.post("/register-user", async function (req, res) {
      const hash = await encryptPassword(req.body.password, bcrypt);
      req.body.password = hash;

      registerUserController(app, req, res);
    });
  },
  ufs: function (app) {
    app.get("/ufs", (req, res) => {
      getAllUfsController(app, req, res);
    });
  },
  newsByUf: function (app) {
    app.get("/news/uf/:id", (req, res) => {
      getNewsByUfController(app, req, res);
    });
  },
  users: function (app) {
    app.get("/users", (req, res) => {
      getAllUsersController(app, req, res);
    });
  },

  news: function (app) {
    app.get("/", (req, res) => {
      getAllNewsController(app, req, res);
    });
  },

  newsHome: function (app) {
    app.get("/news", (req, res) => {
      getAllNewsController(app, req, res);
    });
  },

  new: function (app) {
    app.get("/news/:id", (req, res) => {
      getNewController(app, req, res);
    });
  },

  saveNew: function (app) {
    app.post("/news", (req, res) => {
      saveNewController(app, req, res);
    });
  },

  updateNew: function (app) {
    app.put("/news/:id", (req, res) => {
      updateNewController(app, req, res);
    });
  },

  deleteNew: function (app) {
    app.delete("/news/:id", (req, res) => {
      deleteNewController(app, req, res);
    });
  },
};
