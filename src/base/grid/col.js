/* @flow */

import radium from 'radium';
import React, { Component } from 'react';
import Immutable from 'immutable';

class Col extends Component {
  static colCountToPerc(colCount: number): string {
    if (colCount) {
      return ( colCount / 12 ) * 100 + '%';
    }
  };

  getStyle(xs, sm, md, lg) {
    let style = Immutable.fromJS({
      boxSizing: 'border-box',
      WebkitFlex: '0 0 auto',
      flex: '0 0 auto',
      paddingRight: '1rem',
      paddingLeft: '1rem'
    });
    if (xs) {
      style = style.mergeDeep({
        WebkitFlexBasis: this.colCOuntToPerc(xs),
        flexBasis: this.colCOuntToPerc(xs),
        maxWidth: this.colCOuntToPerc(xs)
      });
    } else {
      style = style.mergeDeep({
        WebkitFlexGrow: 1,
        flexGrow: 1,
        WebkitFlexBasis: 0,
        flexBasis: 0,
        maxWidth: '100%'
      });
    }
    console.log(style);
    return style;
  }

  render() {
    // $FlowDisable
    let {xs, sm, md, lg, ...other} = this.props;
    if (xs) {
      sm = (sm) ? sm : xs;
      md = (md) ? md : sm;
      lg = (lg) ? lg : xs;
    }
    let styles = this.getStyle(xs, sm, md, lg).toJS();
    console.log(styles);
    return (
      <div {...other} style={styles}>
        {this.props.children}
      </div>
    );
  };
}

Col.propTypes = {
  xs: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

Col = radium(Col);

export default Col;
