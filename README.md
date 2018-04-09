# MovieNight-2.0

Want to save your list of movies to reference later on? Use MovieNight where it connects to a database of movies and lists out your favourite movies to watch. Whether you have or not, it's a great guide for remembering what movies you haven't watched and what movies you would love to watch and recommend.

## Instructions

1. Clone the repo to your Desktop
2. Don't forget to " npm install " in both the front-end and back-end
3. Databases!

```
Given we are using postgresql, you need to make a database called 'movienight' and 'movienight_test'

Then you need to run the following knex commands to get that up and running.

knex migrate:latest
knex seed: run 

If you make a mistake, you can undo them using:

knex migrate: rollback
```

## Comments: 

The Database cannot take in the full object given I structured the database according to the given example. Along with that, the data is modified for the decimal places. 

```
{
    "_id": 396371,
    "overview": "Naval Aviator, Pete 'Maverick' Mitchell (Tom Cruise), takes a whirlwind adventure with partner Nick 'Goose' Bradshaw. Sexy, misunderstood, full-throttle machismo. Tremendous.",
    "posterPath": "/h9hUP5ZJGsjL2wbERrGlj4dMjZq.jpg",
    "releaseDate": "2017-12-21",
    "title": "Top Gun",
    "ownScore": 5.0
    "communityScore": 9.9
}
```