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
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.put(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const favouritemovie = await queries.updatefavouriteMovie(ctx.params.id, ctx.request.body);
    if (favouritemovie.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: favouritemovie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That favourite movie does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

router.delete(`${BASE_URL}/:id`, async (ctx) => {
  try {
    const favouritemovie = await queries.deletefavouriteMovie(ctx.params.id);
    if (favouritemovie.length) {
      ctx.status = 200;
      ctx.body = {
        status: 'success',
        data: favouritemovie
      };
    } else {
      ctx.status = 404;
      ctx.body = {
        status: 'error',
        message: 'That favourite movie does not exist.'
      };
    }
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      status: 'error',
      message: err.message || 'Sorry, an error has occurred.'
    };
  }
})

module.exports = router;