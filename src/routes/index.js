const NewsRouter = require('./news');

function Router(app) {
    app.use('/news', NewsRouter);
}

module.exports = Router;
