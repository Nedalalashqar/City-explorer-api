import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

export class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.weatherData.data.map((value) => {
          return (
            <ListGroup style={{ width: "25%", textAlign: "center" }}>
              <ListGroup.Item style={{ backgroundColor: "#77ACF1", color: "white" }}>
                <p>DATE: {value.date}</p>
                <p>DESCRIPTION: {value.description}</p>
              </ListGroup.Item>
            </ListGroup>
          );
        })}
      </div>
    );
  }
}

export default Weather;
