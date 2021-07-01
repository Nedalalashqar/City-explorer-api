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

app.get('/weather', weather);

app.get('/movies', movieController)

app.listen(PORT, () =>{
     console.log(`starting at ${PORT}`)
});