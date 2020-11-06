import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from './components/Game';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Testing GameScreen', () => {
  test('renders operation', () => {
    const wrapper = shallow(<Game />);
    console.log(wrapper.debug());

    expect(wrapper.find('h1').text()).toContain("Ojete");
    // render(<Game />);
    const operator = screen.getByText(/mocos/i);
    expect(operator).toBeInTheDocument();

  })

})



