const { getNewsModel, getNewModel, saveNewModel, updateNewModel, deleteNewModel } = require("../models/news_model");

const { connection, message } = require("../../utils");

module.exports = {
  getAllNewsController: function (app, req, res) {
    getNewsModel(connection, function (error, result) {
      if (error) {
        res.send(message);
      } else {
        res.send(result);
      }
    });
  },

  getNewController: function (app, req, res) {
    getNewModel(req.params.id, connection, function (error, result) {
      if (error) {
        res.send(message);
      } else {
        res.send(result);
      }
    });
  },

  saveNewController: function (app, req, res, errors) {

    if(!errors.isEmpty()) {
      errors = errors.array();
      const erros = {
        message: "Há campos invalidos",
        erros: errors
      }
      res.send(erros);
    }

    saveNewModel(req.body, connection, function (error, result) {
      if (error) {
        res.send(message);
      } else {
        const info = {
          user_id: req.body.user_id,
          content: req.body.content,
          title: req.body.title,
          subtitle: req.body.subtitle,
          image: req.body.image,
          uf_id: req.body.uf_id,
        };
        res.send(info);
      }
    });
  },

  updateNewController: function (app, req, res, errors) {
    
    if(!errors.isEmpty()) {
      errors = errors.array();
      const erros = {
        message: "Há campos invalidos",
        erros: errors
      }
      res.send(erros);
    }

    updateNewModel(req.params.id, req.body, connection, function (error, result) {
      if (error) {
        res.send(message);
      } else {
        const updatedNew = {
          news_id: req.params.id,
          content: req.body.content,
          title: req.body.title,
          subtitle: req.body.subtitle,
          image: req.body.image,
        };
        res.send(updatedNew);
      }
    });
  },

  deleteNewController: function (app, req, res) {
    deleteNewModel(req.params.id, connection, function (error, result) {
      if (error) {
        res.send(message);
      } else {
        res.send(result);
      }
    });
  },
};
