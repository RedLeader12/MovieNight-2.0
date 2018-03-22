process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../src/server/index');
const knex = require('../src/server/db/connection');

describe('routes : favouritemovies', () => {

  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });

  describe('GET /api/v1/favouritemovies', () => {
    it('should return all favourite movies', (done) => {
      chai.request(server)
      .get('/api/v1/favouritemovies')
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.status.should.eql('success');
        res.body.data.length.should.eql(4);
        res.body.data[0].should.include.keys(
          'overview', 'poster_path', 'release_date', 'title','vote_average','popularity',
        );
        done();
      });
    });
  });

  describe('POST /api/v1/favouritemovies', () => {
    it('should return the favourite movie that was added', (done) => {
      chai.request(server)
      .post('/api/v1/favouritemovies')
      .send({
        overview: "Tom Cruise takes a whirlwind adventure with partner Nick.",
        poster_path: "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
        release_date: "2017-12-21",
        title: "Top Gun",
        vote_average: 5.0,
        popularity: 9.9
      })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(201);
        res.type.should.equal('application/json');
        res.body.status.should.eql('success');
        res.body.data[0].should.include.keys(
           'overview', 'poster_path', 'release_date', 'title','vote_average','popularity',
        );
        done();
      });
    });
    it('should throw an error if the payload is malformed', (done) => {
      chai.request(server)
      .post('/api/v1/favouritemovies')
      .send({
        overview: 'Hey Titantic'
      })
      .end((err, res) => {
        should.exist(err);
        res.status.should.equal(400);
        res.type.should.equal('application/json');
        res.body.status.should.eql('error');
        should.exist(res.body.message);
        done();
      });
    });
    // it('should return an error when there is 6 more in the database', (done) => {
    //   chai.request(server)
    //   .post('/api/v1/favouritemovies')
    //   .send({
    //     overview: "Tom Cruise takes a whirlwind adventure with partner Nick.",
    //     poster_path: "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
    //     release_date: "2017-12-21",
    //     title: "Top Gun",
    //     vote_average: 5.0,
    //     popularity: 9.9
    //   },
    //   {
    //     overview: "Heya",
    //     poster_path: "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
    //     release_date: "2017-12-21",
    //     title: "Heya",
    //     vote_average: 10.0,
    //     popularity: 9.9
    //   })
    //   .end((err, res) => {
    //     should.exist(err);
    //     res.status.should.equal(400);
    //     res.type.should.equal('application/json');
    //     res.body.status.should.eql('error');
    //     should.exist(res.body.message);
    //     done();
    //   });
    // });
  });

  describe('PUT /api/v1/favouritemovies', () => {
    it('should return the favourite movie that was updated', (done) => {
      knex('favouritemovies')
      .select('*')
      .then((favouritemovie) => {
        const favouritemovieObject = favouritemovie[0];
        chai.request(server)
        .put(`/api/v1/favouritemovies/${favouritemovieObject.id}`)
        .send({
          vote_average: 10
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.status.should.eql('success');
          res.body.data[0].should.include.keys(
            'overview', 'poster_path', 'release_date', 'title','vote_average','popularity',
          );
          const newfavouriteMovieObject = res.body.data[0];
          newfavouriteMovieObject.vote_average.should.not.eql(favouritemovieObject.vote_average);
          done();
        });
      });
    });

    it('should throw an error if the movie does not exist', (done) => {
      chai.request(server)
      .put('/api/v1/favouritemovies/9999999')
      .send({
        vote_average: 10
      })
      .end((err, res) => {
        should.exist(err);
        res.status.should.equal(404);
        res.type.should.equal('application/json');
        res.body.status.should.eql('error');
        res.body.message.should.eql('That favourite movie does not exist.');
        done();
      });
    });
  });

  describe('DELETE /api/v1/favouritemovies/:id', () => {
    it('should return the favourite movie that was deleted', (done) => {
      knex('favouritemovies')
      .select('*')
      .then((movies) => {
        const favouritemovieObject = movies[0];
        const lengthBeforeDelete = movies.length;
        chai.request(server)
        .delete(`/api/v1/favouritemovies/${favouritemovieObject.id}`)
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.status.should.eql('success');
          res.body.data[0].should.include.keys(
            'overview', 'poster_path', 'release_date', 'title','vote_average','popularity',
          );
          knex('favouritemovies').select('*')
          .then((updatedfavouriteMovies) => {
            updatedfavouriteMovies.length.should.eql(lengthBeforeDelete - 1);
            done();
          });
        });
      });
    });
    it('should throw an error if the movie does not exist', (done) => {
      chai.request(server)
      .delete('/api/v1/favouritemovies/9999999')
      .end((err, res) => {
        should.exist(err);
        res.status.should.equal(404);
        res.type.should.equal('application/json');
        res.body.status.should.eql('error');
        res.body.message.should.eql('That favourite movie does not exist.');
        done();
      });
    });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });


});