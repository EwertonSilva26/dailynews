const {  getUfsModel, getNewsByUfModel } = require('../models/uf_model');
const { connection, message } = require('../../utils');

module.exports = {

    getAllUfsController: function (app, req, res) {
        getUfsModel(connection, function (error, result) {
          if (error) {
            res.send(message);
          } else {
            res.send(result);
          }
        });
      },
    
      getNewsByUfController: function (app, req, res) {
        getNewsByUfModel(req.params.id, connection, function (error, result) {
          if (error) {
            res.send(message);
          } else {
            res.send(result);
          }
        });
      }

}
