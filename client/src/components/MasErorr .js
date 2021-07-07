import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

export class AlertMsg extends Component {
  render() {
    return (
      <Alert variant="danger">
        <Alert.Heading>Error</Alert.Heading>
        <p>{this.props.msgError}</p>
      </Alert>
    );
  }
}

export default AlertMsg;