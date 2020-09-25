import React, { useEffect, useState } from 'react';
import {getPhoto} from '../utils/api';
import {Container, Spinner} from 'reactstrap';
import Detail from '../components/Detail';


const DetailContent = (props) => {
    const {match} = props;
    const id = match.params.id ? match.params.id : null;
    const [photo, setPhoto] = useState({});

    useEffect(() => {
       id && id !== "" && getPhoto({id}).then(res => setPhoto(res))
    }, [id])

    return (
        <Container className="detail">
            {Object.keys(photo).length > 0 &&
                <Detail photo={photo} />
            }
            {Object.keys(photo).length === 0 &&
                <Spinner animation="border" variant="info" />
            }
        </Container>
    );
};

export default DetailContent;