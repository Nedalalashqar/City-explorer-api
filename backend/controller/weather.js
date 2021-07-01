const axios = require('axios');
const weather = require('../data/weather.json');
const weather = require('../models/weather.model');
const WEATHER_BIT_API = process.env.WEATHER_BIT_API;
const Cache = require('../cache/cache');
require('dotenv').config();

const cacheObject = new Cache();
app.get('/weather', (req, res) => {
    let lat = req.query.lat
    let lon = req.query.lon
    const reqKey = `weather-${lat}-${lon}`

    if (lat && lon) {
        if (cacheObject[reqKey]) {
            res.json(cacheObject[reqKey]);
        }else {
        let weatherRes = axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_BIT_API}&lat${lat}&lon=${lon}`).then(response => {
            let weather = response.date
            let findDa = weather.data.map((item, idx) => {
                return new Forecast(item)
            });
            res.json(findDa)
        }).catch(errer => res.send(error.message));
        }      
    } 
    else {
        res.send('please provide the proper lat and lon ');
    }
    
});



module.exports = weather;