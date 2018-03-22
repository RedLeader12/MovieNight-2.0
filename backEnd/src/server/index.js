const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/favouritemovies');

const app = new Koa();
const PORT = process.env.PORT || 3002;

app.use(bodyParser());

app.use(cors());
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;