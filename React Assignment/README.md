# Assignment 2 - Web API.

Name: Your Name

## Features.

A bullet-point list of the ADDITIONAL features I have implemented
 
 + Fetch popular movies from TMDB
 + Fetch top-rated movies from TMDB

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API Configuration

1. Clone the repository.
2. Navigate to the `movies-api` directory and run `npm install` to install backend dependencies.
3. Navigate to the `react-movies` directory and run `npm install` to install frontend dependencies.
__________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
Create a .env file in the react-movies directory with the following content:
TMDB_KEY=[TMDBApiKey]
______________________

## API Design
/api/movies/tmdb/popular | GET | Fetch popular movies from TMDB
/api/movies/tmdb/top-rated | GET | Fetch top-rated movies from TMDB

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
