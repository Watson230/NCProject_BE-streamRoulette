 Stream Roulette - backend

A MongoDB based RESTful API for serving a users films history and viewing habbits, aswell as showing the likes/dislkes and view count of films on our database

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

    Node.js - v9.2.0
    npm - v6.0.0
    MongoDB - v3.4.9

### Dev dependencies  

    "chai": "^4.1.2",
    "chance": "^1.0.13",
    "csvjson": "^5.0.0",
    "mocha": "^5.1.1",
    "mongoose": "^4.13.11",
    "nodemon": "^1.17.3",
    "supertest": "^3.0.0"
    "body-parser": "^1.15.2",
    "express": "^4.16.3",
    "dotenv": "^5.0.1",
    
### Installing

Open your terminal

Clone this repository (https://github.com/Watson230/NCProject_BE-streamRoulette)

Install dependencies ( npm i )

Start the MongoDB process by enter 'mongod' into your terminal

## Running App

To run the app locally enter npm:dev for development environment using nodemon and your local database.

To run the app in the its production Environment with a hosted database, enter run npm start.

## Deployment

Link: 

##Routes
   Get: /api/films/:id - finds film with specified Id

   Get: - /api/film/liked - gives array of the 10 most films with the most likes

   Get: /api/film/disliked - gives array of the 10 most films with the most dislikes

   Get: /api/film/watched - gives array of the 10 most watched films

   Put: /api/films/:id/liked updates a films like count

   Put: /api/films/:id/dislikes - updates a films dislike count

    Put: /api/films/:id/watched - updates a films watched count

   Post: /api/film - saves a new film to DB. requieres film object in req body
   
   Put: /api/search/results/liked/:userId -adds a film to a users liked films

   Put: /api/search/results/disliked/:userId - adds a film to a users disliked films

   Put: /api/search/results/watched/:userId - adds a film to a users watched films

   Put: /api/search/:userId/queires - saves a users search quieres
   
   Get: -/api/user/:username - gets full viewing and search history of a user

   Post: /api/user - Saves new user to database, requires user object in req.body

## Authors

***David Watson*** - *Initial work* - [Watson230](https://github.com/Watson230)
