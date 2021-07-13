const {  
    getAllUfsController, 
    getNewsByUfController 
} = require('../controllers/uf_controller');

module.exports = {
    
    ufs: function (app) {
        app.get("/ufs", (req, res) => {
            getAllUfsController(app, req, res);
        });
    },

    newsByUf: function (app) {
        app.get("/news/uf/:id", (req, res) => {
            getNewsByUfController(app, req, res);
        });
    }

}