const express = require("express"); // require the express package
const app = express(); // initialize your express app instance
const weatherData = require("./data/weather.json");
const cors = require("cors");

app.use(cors()); // after you initialize your express app instance
require("dotenv").config();

const PORT = process.env.PORT;

app.get('/' ,(req ,res) => {res.send('hello world')});

app.get("/weather", (req, res) => {
    const newWeatherData = weatherData.data.map((value) => {
        return new Weather(value);
    });
    res.json(newWeatherData);
});

class Weather {
    constructor(weatherArr) {
        this.description = weatherArr.weather.description;
        this.date = weatherArr.valid_date;
    }
}

app.listen(PORT, () =>{
     console.log(`starting at ${PORT}`)
});