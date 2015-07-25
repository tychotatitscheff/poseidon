/* @flow */

import radium from 'radium';
import React, { Component } from 'react';
import Immutable from 'immutable';

class Row extends Component {
  getStyle(xs, sm, md, lg) {
    let style = Immutable.fromJS({
      boxSizing: 'border-box',
      display: 'flex',
      flex: '0 1 auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: '-1rem',
      marginLeft: '-1rem'
    });
    return style;
  }

  render() {
    // $FlowDisable
    let {...other} = this.props;
    let styles = this.getStyle().toJS();
    return (
      <div {...other} style={styles}>
        {this.props.children}
      </div>
    );
  };
}

Row = radium(Row);

export default Row;
