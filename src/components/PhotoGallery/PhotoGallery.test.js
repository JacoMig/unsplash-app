import * as React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent, waitForElement } from '@testing-library/react';
import {componentWithRouterMatch} from '../../utils/helper';
import PhotoGallery from './PhotoGallery'
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const myquery = "cat"

const componentProps = {
    route: "/",
    path: "/:query?",
    match: {params: {query: myquery}},
}
let wrapper
describe("PhotoGallery Test", () => {
    
    beforeEach(() => {
       // wrapper = Enzyme.mount(Enzyme.shallow(<PhotoGallery photos={[]} {...componentProps} />).get(0))
    })  
    
    test("it renders Photo Gallery without crash", () => {
       /*  const div = document.createElement("div");
         ReactDOM.render(componentWithRouterMatch(PhotoGallery, {
           ...componentProps
         }, {photos: []}), div);   */
    }) 
})

