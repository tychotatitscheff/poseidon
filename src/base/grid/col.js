/* @flow */

import Radium from 'radium';
import React, { Component } from 'react';


/*::;`*/@Radium/*::;`*/
class Col extends Component {
  static propsType = {
    xs: React.PropTypes.int,
    sm: React.PropTypes.int.isRequired,
    md: React.PropTypes.int,
    lg: React.PropTypes.int
  };

  static colCountToPerc(colCount: number): string {
    if (colCount) {
      return ( colCount / 12 ) * 100 + '%';
    }
  };

  render() {
    let {xs=1, sm, md=sm, lg=md, ...other} = this.props;
  };
}

export default Col;
