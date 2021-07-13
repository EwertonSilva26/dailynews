const {
  getAllNewsController,
  getNewController,
  saveNewController,
  updateNewController,
  deleteNewController
} = require("../controllers/news_controller");


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
  }
  
}
