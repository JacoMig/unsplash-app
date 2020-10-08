import React from 'react';
import {Container } from 'reactstrap';
import Header from '../components/Header/Header';
import logo from '../images/unsplash_logo.svg';

const Home = (props) => {
    return (
        <Container className="home">
            <img className="d-block d-sm-none homelogo w-25" src={logo} alt="logo"/>
            <Header label="CLICK me PLEASE" match={props.match} history={props.history} />
        </Container>
    );
};

export default Home;