const {
    registerUserController,
    verifyUserController,
    responseLoginController,
    getAllUsersController
} = require("../controllers/user_controller");

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

    users: function (app) {
        app.get("/users", (req, res) => {
            getAllUsersController(app, req, res);
        });
    }
    
}