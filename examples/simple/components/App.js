/* @flow */

import React, { Component } from 'react';
import { Col, Row } from '../../../src/index';

export default class App extends Component {
  render() {
    return (
      <Row xsAlign="around">
        <Col xs={9}>
          <div style={{'background-color': 'red'}}> Test </div>
        </Col>
        <Col xs={3}>
          <div style={{'background-color': 'blue'}}> Test </div>
        </Col>
      </Row>
    );
  }
}
