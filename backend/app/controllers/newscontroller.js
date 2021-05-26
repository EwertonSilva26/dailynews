const { 
    getNewsModel, 
    getNewModel, 
    saveNewModel, 
    updateNewModel, 
    deleteNewModel 
} = require('../models/newsmodel');

const dbConnection = require('../../config/dbserver');
const connection = dbConnection();
const msg = "Probleama ao conectar o banco";

module.exports = {
    getAllNewsController: function (app, req, res) {
        getNewsModel(connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                res.send(result);
            }

        });
    },

    getNewController: function (app, req, res) {
        getNewModel(req.params.id, connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                res.send(result);
            }
        });
    },

    saveNewController: function (app, req, res) {
        saveNewModel(req.body, connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                const info = {
                    id: req.params.id,
                    text: req.body.text, 
                    title: req.body.title, 
                    subtitle: req.body.subtitle, 
                    image_small: req.body.imgSmall, 
                    image_bigger: req.body.imgBigger
                }
                res.send(info);
            }
        });
    },

    updateNewController: function (app, req, res) {
        updateNewModel(req.params.id, req.body, connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                const updateNew = {
                    id: req.params.id,
                    text: req.body.text, 
                    title: req.body.title, 
                    subtitle: req.body.subtitle, 
                    image_small: req.body.imgSmall, 
                    image_bigger: req.body.imgBigger
                }
                res.send(updateNew);
            }
        });
    },

    deleteNewController: function (app, req, res) {
        deleteNewModel(req.params.id, connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                res.send(result);
            }
        });
    }
}