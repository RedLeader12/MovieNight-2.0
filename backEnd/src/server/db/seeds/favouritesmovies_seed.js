exports.seed = (knex, Promise) => {
  return knex('favouritemovies').del()
  .then(() => {
    return knex('favouritemovies').insert({
      overview: 'The Haunted House',
      poster_path: "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
      release_date: "2017-12-21",
      title: "Top Gun",
      vote_average: 5.0,
      popularity: 8.0
    });
  })
.then(() => {
  return knex('favouritemovies').insert({
    overview: 'The Death Cure KILLS. Find out more',
    poster_path: "/h9hUP5ZJGsjL2wbERrG34543.jpg",
    release_date: "2017-09-21",
    title: "The Death Cure",
    vote_average: 8.0,
    popularity: 6.5
  });
})
.then(() => {
  return knex('favouritemovies').insert({
    overview: 'Poppy playtime is not the right playtime',
    poster_path: "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
    release_date: "2017-04-21",
    title: "Playtime",
    vote_average: 10.0,
    popularity: 3.2
  });
})
.then(() => {
  return knex('favouritemovies').insert({
    overview: 'Postman Pat, the legend',
    poster_path: "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
    release_date: "2017-02-21",
    title: "PostmAN pAT",
    vote_average: 5.0,
    popularity: 10.0
  });
})
};

