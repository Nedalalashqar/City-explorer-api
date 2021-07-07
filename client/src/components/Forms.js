import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Forms extends Component {
  render() {
    return (
      <Form
        style={{ width: "30%", textAlign: "center", marginBottom: "40px" }}
        onSubmit={this.props.getCityData}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: "#0a1931", fontSize: "25px" }}>City Name</Form.Label>
          <Form.Control onChange={this.props.getCityName} type="text" placeholder=" C.ity name" />
        </Form.Group>
        <Button style={{ width: "80%" }} variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    );
  }
}

export default Forms;
