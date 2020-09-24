import React from 'react';
import {Col} from 'reactstrap';
import {Link} from 'react-router-dom';


const Photo = (props) => {
    const {photo} = props;

    return (
        <Col xs={12} sm={4} lg={3}>
            <Link to={`/image/${photo.id}`}>
                <img className="img-fluid img-thumbnail" src={photo.urls.small} alt={photo.alt_description} />
            </Link>
        </Col>
    );
};

export default Photo;