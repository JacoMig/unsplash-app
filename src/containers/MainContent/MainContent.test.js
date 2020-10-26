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
// const setState = jest.fn();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
 // const useStateMock = (initState) => [initState, setState];
  // beforeAll(() => jest.spyOn(window, 'fetch'))
  const setPhotos = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(photos => [photos, setPhotos]); 
  
  beforeEach(() => {
    // history = createMemoryHistory()
     wrapper = Enzyme.mount(Enzyme.shallow(<MainContent {...componentProps} />).get(0))
   
  })

  afterEach(() => {
    jest.clearAllMocks();
    cleanup;
  });

  test("it renders Main Content without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(componentWithRouterMatch(MainContent, {
      ...componentProps
    }), div);
    
  })
  
  
  jest.mock('../../utils/api');

  test("Test Fetching Request", async () => {
    await fetchApi.getPhotos({query: 'woman', page_start: 1}).then(data => {
      expect(data.results.length > 0).toBe(true);
      
    }) 

  
    
    //console.log(wrapper.state('photos'))
   // expect(setPhotos).toHaveBeenCalled();
   
    
  })

})
