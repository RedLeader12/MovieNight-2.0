import React from 'react';
import { shallow, mount, render } from 'enzyme';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
enzyme.configure({ adapter: new Adapter() });

import Movie from '../src/components/Movie'

describe('Movie Component', () => {
 
 it('should render without throwing an error', () => {
   expect(shallow(< Movie />).exists(<div className='Movie'></div>)).toBe(true)
 })
})