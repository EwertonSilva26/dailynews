const app = require('./config/server');

const routesNews = require('./app/routes/routes_news');
const routesUser = require('./app/routes/routes_user');
const routesUf = require('./app/routes/routes_uf');

const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Rotas para noticias
routesNews.news(app);
routesNews.newsHome(app);
routesNews.new(app);
routesNews.saveNew(app);
routesNews.updateNew(app);
routesNews.deleteNew(app);

// Rotas para estados
routesUf.ufs(app);
routesUf.newsByUf(app);

//Rotas para usuario
routesUser.loginUser(app, bCrypt, jwt);
routesUser.registerUser(app, bCrypt);
routesUser.users(app);
