const axios=require('axios');
require('dotenv').config();
const Cache = require('../cache/cache');
const movie = require('../models/movie.model');
const WEATHER_BIT_API=process.env.WEATHER_BIT_API;


const cacheObject = new Cache();
app.get('/movies' , (req , res)=>{
    let city=req.query.city_name
    const reqKey = `movie-${city}`;

    if (city){
        if(cacheObject[reqKey]){
            res.json(cacheObject[reqKey]);
        }else{
            let moviesRes =axios.get(`https://api.themoviedb.org/3/search/movie?api_key${MOVIES_API_KEY}&query=${city}`).then(response =>{
                let movies=response.data.results;
                  let findMov = movies.map(mov =>{
                      return new Movies(mov);
                  });
                  res.json(findMov);
              }).catch(errer=>res.send(error.message));
        }
    }else{
        res.send('please provide the proper lat and lon ');
    }
   
})


module.exports = movies;