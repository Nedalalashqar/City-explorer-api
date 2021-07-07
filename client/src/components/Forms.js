import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class Forms extends Component {
  render() {
    return (
      <Form
        style={{ width: "100px", textAlign: "center", marginBottom: "35px" }}
        onSubmit={this.props.getCityInfo}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontSize: "30px" }}>City Name</Form.Label>
          <Form.Control onChange={this.props.getCityName} type="text" placeholder="City name" />
        </Form.Group>
        <Button style={{ width: "80%" }} variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
    );
  }
}

export default Forms;
