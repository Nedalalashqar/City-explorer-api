import React, { Component } from 'react';
import axios from 'axios';
import {Form , Button,Image} from 'react-bootstrap';
import MasErorr from './MasErorr'
import Weather from './Weather';

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      dataCity: {},
      show: false,
      error: '',
      alert: false,
      weatherData: [],
      movies:[]
    }
  }
  nameHandler = (e) => {
    this.setState({
      city: e.target.value,
    });
  }
  submitData = async (e) => {
    e.preventDefault();
    try {
      const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`).then(response =>{
        this.setState({
          dataCity: response.data[0],
          show: true,
          alert:false,
  
        })
      })
      

      const axiosWeather = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather?lon=${this.state.dataCity.lon}&lat=${this.state.dataCity.lat}&searchQuery=${this.state.city}`).then(response =>{
        this.setState({
          weatherData: response.data,
          show: true,
          alert:false,
        })
      })
      

      const axiosMovies = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies?city_name=${this.state.city}`).then(response =>{
        this.setState({
          moveis: response.data,
          show: true,
          alert:false,
      })
      })

    } catch (error) {
      this.setState({
        errot: error.message,
        alert: true,
        show:false,
      })
    }
    
  }
  render() {
    return (
      <div>
        <MasErorr 
          alert={this.state.alert}
        />
        <Form onSubmit={this.submitData}>
          <Form.Group className="mb-3">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="City Name" onChange={this.nameHandler} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore!
          </Button>
        </Form>
        {this.state.show &&
          this.state.movies.map((mov ,idx)=>{
            return(
              <h3>Title Movies</h3>,
              <h3>Votes</h3>,
              <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.dataCity.lat},${this.state.dataCity.lon}&zoom=14`}/>
            )
          })
        }
        {
         this.state.weatherData.map(weatherData =>{
           return <Weather desc ={weatherData.description} date ={weatherData.date}/>
         })
        }
      </div>
    )
  }
}
export default Forms;
