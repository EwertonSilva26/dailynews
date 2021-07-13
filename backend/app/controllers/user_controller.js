const {
    registerUserModel,
    getUserByEmailModel,
    getUsersModel
} = require('../models/user_model');

const { connection, message } = require('../../utils');

module.exports = {

    registerUserController: function (app, req, res) {
        registerUserModel(req.body, connection, function (error, result) {
            if (error) {
                res.send(message);
            } else {
                const response = {
                    idUser: result.insertId,
                    userName: req.body.userName,
                    email: req.body.email,
                    idUf: req.body.idUf,
                };
                res.send(response);
            }
        });
    },

    verifyUserController: async function (app, req, res) {
        const response = await new Promise((resolve, reject) => {
            getUserByEmailModel(req.body.email, connection, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

        return response;
    },

    responseLoginController: function (decripted, result, jwt, app, req, res) {
        if (decripted) {
            const token = jwt.sign(
                {
                    idUser: result[0].idUser,
                    email: result[0].email,
                },
                "token",
                {
                    expiresIn: "1h",
                }
            );

            res.status(200).send({
                message: `Autenticado com sucesso`,
                idUser: result[0].idUser,
                email: result[0].email,
                token: token,
            });
        } else {
            res.status(401).send({ mensage: "Falha na autenticação!" });
        }
    },

    getAllUsersController: function (app, req, res) {
        getUsersModel(connection, function (error, result) {
          if (error) {
            res.send(message);
          } else {
            res.send(result);
          }
        });
      }
      
}