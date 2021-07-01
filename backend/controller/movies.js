const axios=require('axios');
require('dotenv').config();
const WEATHER_BIT_API=process.env.WEATHER_BIT_API;

app.get('/movies' , (req , res)=>{
    let city=req.query.city_name
    let moviesRes =axios.get(`https://api.themoviedb.org/3/search/movie?api_key${MOVIES_API_KEY}&query=${city}`).then(response =>{
      let movies=response.data.results;
        let findMov = movies.map(mov =>{
            return new Movies(mov);
        });
        res.json(findMov);
    }).catch(errer=>res.send(error.message));
})

class Movies{
    constructor(moviesData){
        this.title=moviesData.original_title;
        this.votes=moviesData.vote_count
        this.img='http://image.tmdb.org/t/p/w342'+moviesData.poster_path;
        
    }
}
