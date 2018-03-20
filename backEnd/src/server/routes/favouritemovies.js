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

router.post(`${BASE_URL}`, async (ctx) => {
  try {
    const favouritemovie = await queries.addfavouriteMovie(ctx.request.body);
    if (favouritemovie.length) {
      ctx.status = 201;
      ctx.body = {
        status: 'success',
        data: favouritemovie
      };
    } else {
      ctx.status = 400;
      ctx.body = {
        status: 'error',
        message: 'Something went wrong.'
      };
    }
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;