/* @flow */

import radium from 'radium';
import React, { Component } from 'react';
import Immutable from 'immutable';

class Col extends Component {
  colCountToPerc(colCount: number) {
    if (colCount) {
      return (colCount / 12) * 100 + '%';
    }
  };

  getStyle(xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset) {
    let style = Immutable.fromJS({
      boxSizing: 'border-box',
      WebkitFlex: '0 0 auto',
      flex: '0 0 auto',
      paddingRight: '1rem',
      paddingLeft: '1rem'
    });

    if (xs) {
      style = style.mergeDeep({
        WebkitFlexBasis: this.colCountToPerc(xs),
        flexBasis: this.colCountToPerc(xs),
        maxWidth: this.colCountToPerc(xs)
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

    if (sm) {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          WebkitFlexBasis: this.colCountToPerc(sm),
          flexBasis: this.colCountToPerc(sm),
          maxWidth: this.colCountToPerc(sm),
          marginLeft: this.colCountToPerc(smOffset)
        }
      });
    } else {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          WebkitFlexGrow: 1,
          flexGrow: 1,
          WebkitFlexBasis: 0,
          flexBasis: 0,
          maxWidth: '100%',
          marginLeft: this.colCountToPerc(smOffset)
        }
      });
    }

    if (md) {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          WebkitFlexBasis: this.colCountToPerc(md),
          flexBasis: this.colCountToPerc(md),
          maxWidth: this.colCountToPerc(md),
          marginLeft: this.colCountToPerc(mdOffset)
        }
      });
    } else {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          WebkitFlexGrow: 1,
          flexGrow: 1,
          WebkitFlexBasis: 0,
          flexBasis: 0,
          maxWidth: '100%',
          marginLeft: this.colCountToPerc(mdOffset)
        }
      });
    }

    if (lg) {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          WebkitFlexBasis: this.colCountToPerc(lg),
          flexBasis: this.colCountToPerc(lg),
          maxWidth: this.colCountToPerc(lg),
          marginLeft: this.colCountToPerc(lgOffset)
        }
      });
    } else {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          WebkitFlexGrow: 1,
          flexGrow: 1,
          WebkitFlexBasis: 0,
          flexBasis: 0,
          maxWidth: '100%',
          marginLeft: this.colCountToPerc(lgOffset)
        }
      });
    }
    return style;
  }

  render() {
    // $FlowDisable
    let {
      xs, sm, md, lg, xsOffset = 0, smOffset = 0, mdOffset = 0, lgOffset = 0, ...other
    } = this.props;
    if (xs) {
      sm = (sm) ? sm : xs;
      md = (md) ? md : sm;
      lg = (lg) ? lg : xs;
    }
    let styles = this.getStyle(xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset).toJS();
    return (
      < div {...other} style = { styles }>
        {this.props.children}
      </div>
    );
  };
}

Col.propTypes = {
  xs: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xsOffset: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  smOffset: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  mdOffset: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lgOffset: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
};

Col = radium(Col);

export default Col;
