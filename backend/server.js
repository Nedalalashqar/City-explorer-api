const express = require('express');
const weather =require('./data/weather.json');
const app = express();
const cors =require('cors');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(cors());

app.get('/' ,(req ,res) => {res.send('hello world')});

app.get('/weather' , (req,res) =>{
  let lat =req.query.lat
  let lon =req.query.lon
  let searchQuery=req.query.searchQuery
  try{
    let findDa=()=>{
        let city =weather.find((city,idx)=>{
            return (city.city_name.toLowerCase() === searchQuery.toLowerCase() &&city.lat === Number(lat) && city.lon === Number(lon))
        })
        return city.data.map(item =>{
            return new Forecast(item)
        })
    }
    
  res.json(findDa());
  }catch(error){
      res.status(500).send('something went worong')
  }
  
});

class Forecast{
    constructor(weatherData){
        this.date=weatherData.valid_date
        this.description=weatherData.weather.description
    }
}

app.listen(PORT, () =>{
     console.log(`starting at ${PORT}`)
});