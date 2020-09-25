import React from 'react';
import {Row, Col} from 'reactstrap';
import InputSearch from './InputSearch';
import logo from '../images/unsplash_logo.svg';

const Header = (props) => {
    
    const {history, match} = props;
    
    const searchPhotos = (query) => {
        props.history.push(`/${query}`)
    }

    return (
        <header className={"fixed-top"}>
            <Row className="align-items-center">
                <Col sm={1} onClick={() => history.push(`/`)}>
                    <img className="d-none d-sm-block" src={logo} alt="logo"/>
                </Col>
                <Col xs={12} sm={11}>
                    <InputSearch match={match} searchPhotos={searchPhotos} />
                </Col>
            </Row>
        </header>
    );
};

export default Header;