const app = require('./config/server');
const routes = require('./app/routes/routes')
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

routes.ufs(app);
routes.users(app);
routes.news(app);
routes.newsHome(app);
routes.new(app);
routes.saveNew(app);
routes.updateNew(app);
routes.deleteNew(app);
routes.newsByUf(app);
routes.registerUser(app, bCrypt);
routes.loginUser(app, bCrypt, jwt);
// routes.login(app);