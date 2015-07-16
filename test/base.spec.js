import React from 'react';
import { TestUtils } from 'react/addons';
import expect from 'chai';

import Base from '../src/base.js';

describe('Base', () => {
  let menu = TestUtils.renderIntoDocument(
    <Base/>
  );
  let menuElem = React.findDOMNode(menu);

  it('Renders the menu items', () => {
    expect(menuElem.querySelectorAll('li').length).to.equal(2);
  });
});
