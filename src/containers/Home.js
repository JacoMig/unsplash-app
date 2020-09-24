import React from 'react';
import {Container } from 'reactstrap';
import Header from '../components/Header';

const Home = (props) => {
    return (
        <Container fluid className="home">
            <Header className="search-home" match={props.match} history={props.history} />
        </Container>
    );
};

export default Home;