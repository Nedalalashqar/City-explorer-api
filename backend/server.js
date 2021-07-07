const express = require("express"); // require the express package
const app = express(); // initialize your express app instance

const weatherData = require("./data/weather.json");
const cors = require("cors");

app.use(cors()); // after you initialize your express app instance
require("dotenv").config();

const PORT = process.env.PORT;

app.get('/' ,(req ,res) => {res.send('hello world')});



app.get('/weather' , (req,res) =>{
  let lat =req.query.lat
  let lon =req.query.lon
  if (lat && lon) {
    const weatherBitUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_KEY}&lat=${lat}&lon=${lon}`;
    axios
        .get(weatherBitUrl)
        .then((response) => {
            const resData = response.data.data.map((item) => new Weather(item));
            res.json(resData);
        })
        .catch((error) => {
            res.send(error.message);
        });
} else {
    res.send("please provide the proper lat and lon");
}
});

// let weatherRes = axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_API}&lat${lat}&lon=${lon}`).then(response =>{
//     let weather=response.date
//     let findDa=weather.data.map((item,idx) =>{
//         return new Forecast(item)
//     });
//     res.json(findDa)
// }).catch(errer=>res.send(error.message));
  
// });

app.get('/movies' , (req , res)=>{
    let city=req.query.city_name
    if (city) {
        const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city}`;
        axios
            .get(moviesUrl)
            .then((response) => {
                console.log(response);
                const resData = response.data.results.map((mov) => new Movies(mov));
                res.json(resData);
            })
            .catch((error) => {
                res.send(error.message);
            });
    } else {
        res.send("please provide the City name");
    }

});
//     let moviesRes =axios.get(`https://api.themoviedb.org/3/search/movie?api_key${MOVIES_API_KEY}&query=${city}`).then(response =>{
//       let movies=response.data.results;
//         let findMov = movies.map(mov =>{
//             return new Movies(mov);
//         });
//         res.json(findMov);
//     }).catch(errer=>res.send(error.message));
// })

class Weather {
    constructor(weatherArr) {
        this.description = weatherArr.weather.description;
        this.date = weatherArr.valid_date;
    }
}


class Movies{
    constructor(moviesData){
        this.title=moviesData.original_title;
        this.votes=moviesData.vote_count
        this.image_url = moviesData.poster_path;
        this.overview = moviesData.overview;
        this.average_vote = moviesData.vote_average;
        this.popularity = moviesData.popularity;
        this.released_on = moviesData.release_date;
    }
  }


app.listen(PORT, () =>{
     console.log(`starting at ${PORT}`)
});