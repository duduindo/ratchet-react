import React from 'react';
import {shallow, render, mount} from 'enzyme';


//  My scripts
import { RTHeader } from '../../src/react/';
//import { RTHeader } from '../../lib/common.min.js';


describe('Header', () => {

  it('Snapshot with Children', () => {
    const component = shallow(
      <RTHeader className="header-custom">
        <h1>Title</h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </RTHeader>
    );

    expect(component).toMatchSnapshot();
  });

  it('Selector', () => {
    const component = shallow(
      <RTHeader className="header-custom">
        <h1>Title</h1>
      </RTHeader>
    );

    expect(component.find('.bar.bar-nav.header-custom').length).toEqual(1);
  });

})
