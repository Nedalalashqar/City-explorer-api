import React, { Component } from "react";
import Forms from "./components/Forms";
import Map from "./components/Map";
import MasErorr  from "./components/MasErorr ";
import Weather from "./components/Weather";
import Movie from "./components/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      weatherData: [],
      lat: "",
      lon: "",
      magError: "",
      showImg: false,
      showAlert: false,
      movies: [],
    };
  }

  getCityName = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  getCityData = async (e) => {
    e.preventDefault();
    try {
      await axios
        .get(
          `https://us1.locationiq.com/v1/search.php?key=pk.88bdc34a015f169659efd4fa8583736c&city=${this.state.city}&format=json`
        )
        .then((axiosResponse) => {
          this.setState({
            cityData: axiosResponse.data[0],
            lat: axiosResponse.data[0].lat,
            lon: axiosResponse.data[0].lon,
          });
          axios
            .get(`http://localhost:8000/weather?lat=${this.state.lat}&lon=${this.state.lon}`)
            .then((weatherResponse) => {
              this.setState({
                weatherData: weatherResponse.data,
                showImg: true,
                showAlert: false,
              });
            });
          axios.get(`http://localhost:8000/movies?city=${this.state.city}`).then((moviesResponse) => {
            this.setState({
              movies: moviesResponse.data,
            });
            // console.log(moviesResponse.data);
          });
        });
    } catch (error) {
      this.setState({
        magError: error.message,
        showAlert: true,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.showAlert && <MasErorr  magError={this.state.magError} />}
        <Forms getCityName={this.getCityName} getCityData={this.getCityData} />
        {this.state.showImg && (
          <div>
            <Map cityData={this.state.cityData} />
            <Weather weatherData={this.state.weatherData} />
            <Movie movies={this.state.movies} />
          </div>
        )}
      </div>
    );
  }
}
export default App;
