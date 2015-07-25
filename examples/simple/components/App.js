/* @flow */

import React, { Component } from 'react';
import { Col } from '../../../lib/index';

export default class App extends Component {
  render() {
    return (
      <div style={{}}>
        <Col sm={6}>
          test
        </Col>
        <Col sm={6}>
          test2
        </Col>
      </div>
    );
  }
}
