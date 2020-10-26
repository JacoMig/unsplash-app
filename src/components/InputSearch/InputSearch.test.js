import * as React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import InputSearch from './InputSearch';

import {componentWithRouterMatch} from '../../utils/helper';
import { createMemoryHistory } from 'history';
import registerFaIcons from '../../utils/registerFaIcons';

import Enzyme, {shallow, mount} from 'enzyme';
// import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })


registerFaIcons()

let wrapper;
let history;
const myquery = "woman"
const componentProps = {
  route: "/",
  path: "/:query?",
  match: {params: {query: ""}}
}

describe("InputSearch testing", () => {
  const setQuery = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(query => [query=myquery, setQuery]);

  beforeEach(() => {
    history = createMemoryHistory()
    wrapper = Enzyme.mount(Enzyme.shallow(<InputSearch  history={history} {...componentProps} />).get(0))
    
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
   
  test("it renders Input without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(componentWithRouterMatch(InputSearch, {
      ...componentProps
    }), div);
  }) 
   
  test("Change Input Value and SetQuery", async () => {
    const input = wrapper.find('input');
    input.instance().value = myquery;
    input.simulate("change");
    expect(setQuery).toHaveBeenCalledWith(myquery); 
   
  })

  test("Submit Form with Query and Change Location Path", () => {
    wrapper.simulate('submit', { preventDefault: () => {} });
    expect(history.location.pathname).toBe(`/${myquery}`); 
  }) 

  test("Click on Button and Submit Form", () => {
    const Button = wrapper.find('#submitButton').first()
    Button.simulate('click')
    expect(history.location.pathname).toBe(`/${myquery}`); 
    
  })

})






 




 