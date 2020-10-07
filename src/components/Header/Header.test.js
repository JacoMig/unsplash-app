import React from 'react'
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Header from './Header'

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<Header></Header>, div)
}) 

it("renders button with text", () => {
    const {getByTestId} = render(<Header></Header>)
    expect(getByTestId("button")).toHaveTextContent("CLICK ME PLEASE")
})