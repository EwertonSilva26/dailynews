const {
    getUfsModel,
    getUsersModel,
    getNewsModel,
    getNewModel,
    saveNewModel,
    updateNewModel,
    deleteNewModel,
    getNewsByUfModel,
    registerUserModel,
    getUserByEmailModel
} = require('../models/newsmodel');

const dbConnection = require('../../config/dbserver');
const connection = dbConnection();
const msg = "Tivemos algum problema para execeutar essa ação! ";

module.exports = {

    verifyUserController: function (app, bcrypt, jwt, req, res) {
        getUserByEmailModel(req.body.email, connection, function (error, result) {
            if (error) {
                res.send(`${error} ${msg}`)
            }

            if (decryptPassword(req.body.password, result[0].userPassword, bcrypt)) {
               const token =  jwt.sign({
                   idUser: result[0].email,
                   email: result[0].email
               }, 
               "token", {
                   expiresIn: "1h"
               })
                res.send({
                    message: `Auteticado com sucesso`,
                    token: token
                });
            }

        });
    },
    registerUserController: function (app, req, res) {
        registerUserModel(req.body, connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                const response = {
                    idUser: result.insertId,
                    userName: req.body.userName,
                    email: req.body.email,
                    idUf: req.body.idUf
                }
                res.send(response);
            }
        });
    },
    getAllUfsController: function (app, req, res) {
        getUfsModel(connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                res.send(result);
            }
        });
    },

    getAllUsersController: function (app, req, res) {
        getUsersModel(connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                res.send(result);
            }
        });
    },
    getNewsByUfController: function (app, req, res) {
        getNewsByUfModel(req.params.id, connection, function (error, result) {
            if (error) {
                res.send(msg)
            } else {
                res.send(result);
            }
        });
    },

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
                    idNew: result.insertId,
                    textNew: req.body.text,
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
                const updatedNew = {
                    idNew: req.params.id,
                    textNew: req.body.text,
                    title: req.body.title,
                    subtitle: req.body.subtitle,
                    image_small: req.body.imgSmall,
                    image_bigger: req.body.imgBigger
                }
                res.send(updatedNew);
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
    })

    return decrypted;
}