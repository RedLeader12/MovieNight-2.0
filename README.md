# MovieNight-2.0

## User Stories: 

```
As a Film Enthusiast
So I can find a good movie to watch
I want to Search through a list of movies
```

```
As a Film Enthusiast
So I can get a sense for what to watch
I want to See the movie title, poster and an overview
```

```
As a Film Enthusiast
So I can remember what I've been browsing
I want to pick my favourite films from a list
```

```
As a Film Enthusiast
So I know which films a re good and which are bad
I want to rank movies in order
```

```
As a Film Enthusiast who can only count up to 5
So that I can remember my favourite films ever
I want to persist only my top 5 to a database
```

```
As a Film Enthusiast
So I can change my mind
I want to be able to re-order my ranking list
```

```
As a Film Enthusiast who can only count up to 5
So I can understand what is a good film or not,
I want to change a pre-determined ranking to be out of 5
```

```
As a Film Enthusiast
So I can add new films to my Top 5
Dynamically update my rankings
```


## References: 

Api: 
```
https://api.themoviedb.org/3/movie/top_rated?api_key=121486b23802e0b6735125ff1892f340&language=en-US&page=1
```

Database Schema: 

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