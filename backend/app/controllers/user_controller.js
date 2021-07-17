const { registerUserModel, getUserByEmailModel, getUsersModel, getUserAuthModel } = require("../models/user_model");

const { connection, message, bcrypt, jwt, SECRET } = require("../../utils");

module.exports = {
  registerUserController: function (app, req, res) {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
      registerUserModel(req.body, hash, connection, function (error, result) {
        if (error) {
          console.log(error);
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
    });
  },

  verifyUserController: async function (app, req, res) {
    const response = await new Promise((resolve, reject) => {
      getUserByEmailModel(req.body.email, connection, function (error, result) {
        if (error) {
          res.send(message);
        } else {
          res.send(result);
        }
      });
    });

    return response;
  },

  loginController: async function (app, req, res, errors) {

    if(!errors.isEmpty()) {
      errors = errors.array();
      const erros = {
        message: "Campo email invalido",
        erros: errors
      }
      res.send(erros);
    }

    getUserByEmailModel(req.body.email, connection, function (error, result) {
      if (error) {
        res.send(message);
      } else {
        if (result[0]) {
          bcrypt.compare(req.body.password, result[0].user_password, function (err, compareResult) {
            if (compareResult) {
              const token = jwt.sign(
                {
                  user_id: result[0].user_id,
                  email: result[0].email,
                },
                SECRET,
                {
                  expiresIn: "1h",
                }
              );

              res.status(200).send({
                auth: true,
                user_id: result[0].user_id,
                email: result[0].email,
                user_name: result[0].user_name,
                token: token,
              });
            } else {
              res.status(401).send({ message: "Falha na autenticação!" });
            }
          });
        } else {
          res.status(404).send({ message: "Usuário inválido!" });
        }
      }
    });
  },

  getAllUsersController: function (app, req, res) {
    getUsersModel(connection, function (error, result) {
      if (error) {
        res.send(message);
      } else {
        res.send(result);
      }
    });
  },
};
