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

 it('renders the overview', () => {
  expect(shallow(<Movie />).find('#overview').length).toEqual(1)
 })

 it('renders the title', () => {
  expect(shallow(<Movie />).find('#title').length).toEqual(1)
 })

 it('renders the posterPath', () => {
  expect(shallow(<Movie />).find('#posterPath').length).toEqual(1)
 })

 it('renders the popularity', () => {
  expect(shallow(<Movie />).find('#popularity').length).toEqual(1)
 })


})