import React from 'react';
import {Col} from 'reactstrap';
import styled from 'styled-components';
// import {useInView} from "react-intersection-observer";

const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 30px;
    display: block;
`


const Photo = (props) => {
   // const [ref, inView] = useInView();
    const {photo} = props;

    


    return (
        <Col xs={6} sm={4} lg={3}>
            <Image className="img-fluid img-thumbnail" src={photo.urls.regular} alt={photo.alt_description} />
        </Col>
    );
};

export default Photo;