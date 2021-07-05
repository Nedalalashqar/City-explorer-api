const express = require('express');
const weather =require('./data/weather.json');
const movies =require('./data/movies.json')
const app = express();
const cors =require('cors');
const axios=require('axios');
const { response, query } = require('express');
require('dotenv').config();
const weather = require('./controller/weather');
const PORT = process.env.PORT;
const MOVIES_API_KEY=process.env.MOVIES_API_KEY;
app.use(cors());

app.get('/' ,(req ,res) => {res.send('hello world')});


app.get('/weather' , (req,res) =>{
  let lat =req.query.lat
  let lon =req.query.lon


let weatherRes = axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_API}&lat${lat}&lon=${lon}`).then(response =>{
    let weather=response.date
    let findDa=weather.data.map((item,idx) =>{
        return new Forecast(item)
    });
    res.json(findDa)
}).catch(errer=>res.send(error.message));
  
});

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

class Forecast{
    constructor(weatherData){
        this.date=weatherData.valid_date
        this.description=weatherData.weather.description
    }
}


app.get('/movies', movieController)

app.listen(PORT, () =>{
     console.log(`starting at ${PORT}`)
});