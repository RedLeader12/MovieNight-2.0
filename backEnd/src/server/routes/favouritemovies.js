const Router = require('koa-router');
const queries = require('../db/queries/favouritemovies');

const router = new Router();
const BASE_URL = `/api/v1/favouritemovies`;

module.exports = router;