/* @flow */

import React, { Component } from 'react';
import { Col, Row } from '../../../lib/index';

export default class App extends Component {
  render() {
    return (
      <Row>
        <Col sm={6}>
          test
        </Col>
        <Col sm={6}>
          test2
        </Col>
      </Row>
    );
  }
}
