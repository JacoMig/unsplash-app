import React, { useEffect, useState} from 'react';
import {getPhotos} from '../../utils/api';
import {Row, Col, Container, Spinner} from 'reactstrap';
import PhotoGallery from '../../components/PhotoGallery';

let count = 0

const MainContent = (props) => {
    
    const {match} = props;
    const query = match.params.query ? match.params.query : ""
    const [photos, setPhotos] = useState([]);
    const [endLoading, setEndLoading] = useState(false);
    const [loading, setIsLoading] = useState(false);
 
   
    const loadPhotos = () => {
        count += 1
        return getPhotos({query, page_start: count})
            .then(res => {
                setPhotos(state => [...state, ...res.results]);
                if(count === res.total_pages) {
                    setEndLoading(true);
                }
            }).catch(e => console.log(e))
    }

   
    useEffect(() => {
        if(query !== ""){
            const fetchData = async () => {
                setIsLoading(true);
                setPhotos([]);
                count = 0;
                await loadPhotos();
                setIsLoading(false)
                setEndLoading(false);
                console.log('initial fetchdata')
            }
            fetchData()    
        }
    },[query])

    

    return (
        <Container>
             <Row>
                {!loading &&  photos.length > 0 && 
                    <PhotoGallery endLoading={endLoading} loadPhotos={loadPhotos} photos={photos} />
                }
                {!loading &&  photos.length === 0 && 
                    <Col col={12}><h6>Nessun risultato trovato per: <i>{query}</i></h6></Col>
                }
                {loading && <Spinner animation="border" variant="info" />}
            </Row>
        </Container>
    );
};

export default MainContent;