import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export class Map extends Component {
  render() {
    return (
      <Card
        bg="secondary"
        text="white"
        className="text-center p-3"
        style={{ width: "25%", height: "80%",  marginBottom: "35px" }}
      >
        <Image
          style={{ width: "80%" }}
          src={`https://maps.locationiq.com/v3/staticmap?key=pk.88bdc34a015f169659efd4fa8583736c&q&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=15`}
          rounded
        />
        <Card.Body>
          <Card.Title>{this.props.cityData.display_name}</Card.Title>
          <Card.Text>
            <span>Lat: {this.props.cityData.lat}</span>
            <br />
            <span>Lon: {this.props.cityData.lon}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Map;
