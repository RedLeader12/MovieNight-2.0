import React from 'react';
import { shallow, mount, render } from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({ adapter: new Adapter() });

import Favourite from '../src/components/Favourite'

describe('Favourite Component', () => {
 
 it('should render without throwing an error', () => {
   expect(shallow(< Favourite />).exists(<div className='Favourite'></div>)).toBe(true)
 })
})