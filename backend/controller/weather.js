const axios=require('axios');
const weather=require('../data/weather.json')
const WEATHER_BIT_API=process.env.WEATHER_BIT_API;
require('dotenv').config();

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

class Forecast{
    constructor(weatherData){
        this.date=weatherData.valid_date
        this.description=weatherData.weather.description
    }
}