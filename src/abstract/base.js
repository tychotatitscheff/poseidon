/* eslint-disable no-console */

// Shamelessly taken from https://github.com/este/este/blob/master/src/client/components/component.react.js

import React, { Component } from 'react';
import shallowEqual from '../../node_modules/react-pure-render/shallowEqual';

var diff;
if (process.env.NODE_ENV === 'development') {
  diff = require('immutablediff');
}


class Base extends Component {

  static contextTypes = {
    router: React.PropTypes.func,
    posTheme: React.PropTypes.object
  };

  // In order to provide optimisation we are going to make base components be pure render.
  // Hence we are going to use react-pure-render from Dan Abramov
  // But we should care that nobody use react-pure-render for stateful component like router one
  // See https://github.com/gaearon/react-pure-render#known-issues
  shouldComponentUpdate(nextProps, nextState) {
    // Custom pure render if the components has a router context
    if (this.context.router) {
      const changed = this.pureComponentLastPath !== this.context.router.getCurrentPath();
      this.pureComponentLastPath = this.context.router.getCurrentPath();
      if (changed) return true;
    }
    // Call react-pure-render in order to see if react should update
    const shouldUpdate =
      !shallowEqual(this.props, nextProps) ||
      !shallowEqual(this.state, nextState);


    // This will be only loaded in DEV
    if (shouldUpdate && process.env.NODE_ENV === 'development') {
      this._logShouldUpdateComponents(nextProps, nextState);
    }

    return shouldUpdate;
  }

   // Helper to check which component was changed and why.
   _logShouldUpdateComponents(nextProps, nextState) {
     const name = this.constructor.displayName || this.constructor.name;
     console.log(`${name} shouldUpdate`);
     const propsDiff = diff(this.props, nextProps).toJS();
     const stateDiff = diff(this.state, nextState).toJS();
     if (propsDiff.length) {
       console.log('props', propsDiff);
     }
     if (stateDiff.length) {
       console.log('state', stateDiff);
     }
   }
  render() {
    return <div/>;
  }
}

export default Base;
