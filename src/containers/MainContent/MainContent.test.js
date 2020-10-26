import * as React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {componentWithRouterMatch} from '../../utils/helper';
import { createMemoryHistory } from 'history'
import MainContent from './MainContent'
import registerFaIcons from '../../utils/registerFaIcons';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import {getPhotos} from '../../utils/api';


Enzyme.configure({ adapter: new Adapter() })

registerFaIcons()

let wrapper;
// let history;
const myquery = "woman"
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
  /*  window.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ results: { id: 1 } }),
    })
  );  */
  
 
  test("Test Fetching Request", async () => {
   // Here you make a real fetch API
   // const response = await getPhotos({query: 'woman', page_start: 1})
    // const results = response.json()
   // console.log(setPhotos.mock)
   // expect(response.results.length > 0).toBeTruthy()
   
    /* const rate = await getPhotos({query: "woman", page_start: 1})
    setPhotos.mockReturnValueOnce(rate)
    console.log(setPhotos.mock)
    expect(window.fetch).toHaveBeenCalledTimes(1); */
   
      
   
  })

})
