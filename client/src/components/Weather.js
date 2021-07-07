import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export class Weather extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> WEATHER DETAILS</h1>
        <ListGroup style={{ width: "25%", textAlign: "center" }}>
          {this.props.weatherData.map((value, idx) => {
            return (
              <ListGroup.Item key={idx} style={{ backgroundColor: "#77ACF1", color: "white", marginBottom: "5px" }}>
                <span>DATE: {value.date}</span>
                <br />
                <span>DESCRIPTION: {value.description}</span>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default Weather;
