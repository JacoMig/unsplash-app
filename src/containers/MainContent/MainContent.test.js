import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import {componentWithRouterMatch} from '../../utils/helper';
import { createMemoryHistory } from 'history'
import MainContent from './MainContent'
import registerFaIcons from '../../utils/registerFaIcons';

afterEach(cleanup);
registerFaIcons()

const componentProps = {
    route: "/",
    path: "/:query?"
}

test("it renders Main Content without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(componentWithRouterMatch(MainContent, {
      ...componentProps
    }), div);
})

/* test("fetch Photos by Match Params", () => {
    
}) */