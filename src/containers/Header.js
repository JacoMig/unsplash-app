import React, { useEffect, useState, useContext } from 'react';
import {Container} from 'reactstrap';
import InputSearch from '../components/InputSearch';
import {AppContext} from '../context/AppContext';
import { withRouter } from "react-router";

const Header = (props) => {
    
    const {newQuery, setNewQuery} = useContext(AppContext);
    
    useEffect(() => {
        // getPhotos().then(res => console.log(res));
        console.log(props)
    }, [])

    const searchPhotos = (query) => {
        props.history.push(`/${query}`)
        // getPhotos({query, page_start: 1}).then(res => console.log(res));
    }

    return (
        <header>
            <Container fluid>
                <h1>Unsplash App</h1>
                <InputSearch searchPhotos={searchPhotos} />
            </Container>
        </header>
    );
};

export default withRouter(Header);