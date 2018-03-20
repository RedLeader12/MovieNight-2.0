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
        res.body.data.length.should.eql(1);
        res.body.data[0].should.include.keys(
          '_id', 'overview', 'poster_path', 'release_date', 'title','vote_average','popularity',
        );
        done();
      });
    });
  });

  describe('POST /api/v1/favouritemovies', () => {
    it('should return the movie that was added', (done) => {
      chai.request(server)
      .post('/api/v1/favouritemovies')
      .send({
        _id: "396371",
        overview: "Tom Cruise takes a whirlwind adventure with partner Nick.",
        poster_path: "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
        release_date: "2017-12-21",
        title: "Top Gun",
        ownScore: 5.0,
        popularity: 9.9
      })
      .end((err, res) => {
        should.not.exist(err);
        res.status.should.equal(201);
        res.type.should.equal('application/json');
        res.body.status.should.eql('success');
        res.body.data[0].should.include.keys(
            '_id', 'overview', 'poster_path', 'release_date', 'title','vote_average','popularity',
        );
        done();
      });
    });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });


});