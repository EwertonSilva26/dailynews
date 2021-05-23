const app = require('./config/server');
const routes = require('./app/routes/routes')

routes.news(app);
routes.newsHome(app);
routes.new(app);
routes.saveNew(app);
routes.updateNew(app);
routes.deleteNew(app);