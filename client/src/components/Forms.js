import React, { Component } from 'react';
import axios from 'axios';
import {Form , Button,Image} from 'react-bootstrap';
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
      weatherData: []
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
      const axiosResponse = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.88bdc34a015f169659efd4fa8583736c&q=${this.state.city}&format=json`)
      const axiosRes = await axios.get(`http://localhost:8000/weather?lon=${this.state.dataCity.lon}&lat=${this.state.dataCity.lat}&searchQuery=${this.state.city}`);
      this.setState({
        dataCity: axiosResponse.data[0],
        show: true,
        alert:false,
        weatherData: axiosRes.data

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
          <div>
            <p>
              {this.state.dataCity.display_name}
            </p>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.88bdc34a015f169659efd4fa8583736c&center=${this.state.dataCity.lat},${this.state.dataCity.lon}&zoom=14`}/>
            <p>
              {`lat: ${this.state.dataCity.lat}, lon: ${this.state.dataCity.lon}`}
            </p>
          </div>
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
