/* @flow */

import radium from 'radium';
import React, {
  Component
}
from 'react';
import Immutable from 'immutable';

class Row extends Component {
  getStyle(xsAlign, smAlign, mdAlign, lgAlign) {
    let style = Immutable.fromJS({
      boxSizing: 'border-box',
      display: ['-webkit-flex', '-ms-flex', 'flex'],
      flex: '0 1 auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginRight: '-1rem',
      marginLeft: '-1rem'
    });
    if (!xsAlign || xsAlign === 'around') {
      style = style.mergeDeep({
        justifyContent: 'space-around'
      });
    } else if (xsAlign === 'between') {
      style = style.mergeDeep({
        justifyContent: 'space-between'
      });
    } else if (xsAlign === 'start') {
      style = style.mergeDeep({
        justifyContent: 'flex-start',
        textAlign: 'start'
      });
    } else if (xsAlign === 'center') {
      style = style.mergeDeep({
        justifyContent: 'center',
        textAlign: 'center'
      });
    } else if (xsAlign === 'end') {
      style = style.mergeDeep({
        justifyContent: 'flex-end',
        textAlign: 'end'
      });
    } else if (xsAlign === 'top') {
      style = style.mergeDeep({
        alignItems: 'flex-start'
      });
    } else if (xsAlign === 'center') {
      style = style.mergeDeep({
        alignItems: 'center'
      });
    } else if (xsAlign === 'bottom') {
      style = style.mergeDeep({
        alignItems: 'flex-end'
      });
    }

    if (!smAlign || smAlign === 'around') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          justifyContent: 'space-around'
        }
      });
    } else if (smAlign === 'between') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          justifyContent: 'space-between'
        }
      });
    } else if (smAlign === 'start') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          justifyContent: 'flex-start',
          textAlign: 'start'
        }
      });
    } else if (smAlign === 'center') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          justifyContent: 'center',
          textAlign: 'center'
        }
      });
    } else if (smAlign === 'end') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          justifyContent: 'flex-end',
          textAlign: 'end'
        }
      });
    } else if (smAlign === 'top') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          alignItems: 'flex-start'
        }
      });
    } else if (smAlign === 'center') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          alignItems: 'center'
        }
      });
    } else if (smAlign === 'bottom') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 48em)': {
          alignItems: 'flex-end'
        }
      });
    }

    if (!mdAlign || mdAlign === 'around') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          justifyContent: 'space-around'
        }
      });
    } else if (mdAlign === 'between') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          justifyContent: 'space-between'
        }
      });
    } else if (mdAlign === 'start') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          justifyContent: 'flex-start',
          textAlign: 'start'
        }
      });
    } else if (mdAlign === 'center') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          justifyContent: 'center',
          textAlign: 'center'
        }
      });
    } else if (mdAlign === 'end') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          justifyContent: 'flex-end',
          textAlign: 'end'
        }
      });
    } else if (mdAlign === 'top') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          alignItems: 'flex-start'
        }
      });
    } else if (mdAlign === 'center') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          alignItems: 'center'
        }
      });
    } else if (mdAlign === 'bottom') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 62em)': {
          alignItems: 'flex-end'
        }
      });
    }

    if (!lgAlign || lgAlign === 'around') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          justifyContent: 'space-around'
        }
      });
    } else if (lgAlign === 'between') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          justifyContent: 'space-between'
        }
      });
    } else if (lgAlign === 'start') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          justifyContent: 'flex-start',
          textAlign: 'start'
        }
      });
    } else if (lgAlign === 'center') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          justifyContent: 'center',
          textAlign: 'center'
        }
      });
    } else if (lgAlign === 'end') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          justifyContent: 'flex-end',
          textAlign: 'end'
        }
      });
    } else if (lgAlign === 'top') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          alignItems: 'flex-start'
        }
      });
    } else if (lgAlign === 'center') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          alignItems: 'center'
        }
      });
    } else if (lgAlign === 'bottom') {
      style = style.mergeDeep({
        '@media only screen and (min-width: 75em)': {
          alignItems: 'flex-end'
        }
      });
    }
    return style;
  }

  render() {
    // $FlowDisable
    let {xsAlign, smAlign, mdAlign, lgAlign, ...other} = this.props;
    let styles = this.getStyle(xsAlign, smAlign, mdAlign, lgAlign).toJS();
    return (
      <div {...other} style = {styles}>
        {this.props.children}
      </div>
    );
  };
}

Row.propTypes = {
  xsAlign: React.PropTypes.oneOf(['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between']).isRequired,
  smAlign: React.PropTypes.oneOf(['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between']),
  mdAlign: React.PropTypes.oneOf(['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between']),
  lgAlign: React.PropTypes.oneOf(['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'])
};

Row = radium(Row);

export default Row;
