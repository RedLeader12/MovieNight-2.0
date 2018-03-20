const Router = require('koa-router');
const queries = require('../db/queries/favouritemovies');

const router = new Router();
const BASE_URL = `/api/v1/favouritemovies`;

router.get(BASE_URL, async (ctx) => {
    try {
      const favouritemovies = await queries.getAllfavouriteMovies();
      ctx.body = {
        status: 'success',
        data: favouritemovies
      };
    } catch (err) {
      console.log(err)
    }
  })

module.exports = router;