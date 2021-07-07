import React, { Component } from "react";
import FormData from "./components/FormData";
import MapAndData from "./components/MapAndData";
import AlertMsg from "./components/AlertMsg";
import Weather from "./components/Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: {},
      weatherData: [],
      magError: "",
      showImg: false,
      showAlert: false,
    };
  }

  getCityName = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  getCityData  = async (e) => {
    e.preventDefault();

    try {
      const axiosResponse = await axios.get(
        `https://us1.locationiq.com/v1/search.php?key=pk.88bdc34a015f169659efd4fa8583736c&city=${this.state.city}&format=json`
      );

      const myApiRes = await axios.get(`${process.env.REACT_APP_URL}/weather`);
      console.log(myApiRes);
      this.setState({
        cityData: axiosResponse.data[0],
        weatherData: myApiRes,
        showImg: true,
        showAlert: false,
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
        {this.state.showAlert && <AlertMsg magError={this.state.magError} />}

        <FormData getCityName={this.getCityName} getCityData={this.getCityData} />

        {this.state.showImg && (
          <div>
            <Map cityData={this.state.cityData} />
            <Weather weatherData={this.state.weatherData} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
