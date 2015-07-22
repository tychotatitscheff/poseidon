import React from 'react';
import reactDOM from 'react-dom';
let ReactTestUtils= require('react/lib/ReactTestUtils');
import { expect } from 'chai';
import {it, describe} from 'mocha';

let Base = require('../src/abstract/base');

describe('Base', () => {
  let base = ReactTestUtils.renderIntoDocument(
    <Base/>
  );
  let baseElem = reactDOM.findDOMNode(base);

  it('It should render an div', () => {
    expect(baseElem.nodeName).to.equal('DIV');
  });

  it('It Should be empty', () => {
    expect(baseElem.innerHTML).to.equal('');
  });
});
