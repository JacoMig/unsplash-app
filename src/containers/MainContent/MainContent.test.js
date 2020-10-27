import * as React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import {componentWithRouterMatch} from '../../utils/helper';
import { createMemoryHistory } from 'history'
import MainContent from './MainContent'
import registerFaIcons from '../../utils/registerFaIcons';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as fetchApi from '../../utils/api';

import {loadPhotos} from './MainContent';
Enzyme.configure({ adapter: new Adapter() })

registerFaIcons()

let wrapper;
// let history;
const myquery = "cat"
const componentProps = {
    route: "/",
    path: "/:query?",
    match: {params: {query: myquery}}
}

describe("MainContent testing", () => {

  /* const setPhotos = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(photos => [photos, setPhotos]);  */
  
  beforeEach(() => {
    wrapper = Enzyme.mount(Enzyme.shallow(<MainContent {...componentProps} />).get(0))
  }) 

  afterEach(() => {
    jest.clearAllMocks();
    cleanup;
  });


  test("Main Content matches Snapshot", () => {
     expect(wrapper).toMatchSnapshot()
  }) 

  test("it renders Main Content without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(componentWithRouterMatch(MainContent, {
      ...componentProps
    }), div);
  }) 
  
  
  jest.mock('../../utils/api');
  
  test("Check if Fetching Api returns something", async () => {
    await fetchApi.getPhotos({query: 'woman', page_start: 1}).then(data => {
      expect(data.results.length > 0).toBe(true);
    })  
  }) 
  
  
  const setPhotos = jest.fn()
  test("Check if setPhotos is called after fetch Api", async () => {
    await loadPhotos('cat', setPhotos)
    expect(setPhotos).toHaveBeenCalled()
   
  })

})
