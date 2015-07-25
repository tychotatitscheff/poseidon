/* @flow */

import radium from 'radium';
import React, { Component } from 'react';

class Col extends Component {
  static colCountToPerc(colCount: number): string {
    if (colCount) {
      return ( colCount / 12 ) * 100 + '%';
    }
  };

  render() {
    let {xs=1, sm, md=sm, lg=md, ...other} = this.props;
    return (<div>Test</div>);
  };
}

Col.propTypes = {
  xs: React.PropTypes.number,
  sm: React.PropTypes.number.isRequired,
  md: React.PropTypes.number,
  lg: React.PropTypes.number
};

Col = radium(Col);

export default Col;
