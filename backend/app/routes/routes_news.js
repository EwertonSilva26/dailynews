const { check, validationResult } = require("express-validator");
const { getAllNewsController, getNewController, saveNewController, updateNewController, deleteNewController } = require("../controllers/news_controller");

const { verifyJWT } = require("../../utils");

module.exports = {
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
    app.post("/news", verifyJWT, (req, res) => {
      let erros = validationResult(req);
      saveNewController(app, req, res, erros);
    });
  },

  updateNew: function (app) {
    app.put("/news/:id", verifyJWT, (req, res) => {
      let erros = validationResult(req);
      updateNewController(app, req, res, erros);
    });
  },

  deleteNew: function (app) {
    app.delete("/news/:id", verifyJWT, (req, res) => {
      deleteNewController(app, req, res);
    });
  },
};
