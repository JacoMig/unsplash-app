import React, { useEffect, useState} from 'react';
import {getPhotos} from '../../utils/api';
import {Row, Col, Container, Spinner} from 'reactstrap';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';

let count = 0

export const loadPhotos = (query, setPhotos, setEndLoading) => {
    count += 1
    return getPhotos({query, page_start: count})
        .then(res => {
            setPhotos(state => [...state, ...res.results]);
            if(count === res.total_pages) {
                setEndLoading(true);
            }
    }).catch(e => console.log(e))
}

const MainContent = (props) => {
    
    const {match} = props;
    const query = match.params.query ? match.params.query : ""
    const [photos, setPhotos] = useState([]);
    const [endLoading, setEndLoading] = useState(false);
    const [loading, setIsLoading] = useState(false);
 
   
   /*  const loadPhotos = () => {
       
    } */

   
    useEffect(() => {
        if(query !== ""){
            const fetchData = async () => {
                setIsLoading(true);
                setPhotos([]);
                count = 0;
                await loadPhotos(query, setPhotos, setEndLoading);
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
                {/* photos.length > 0 && <p className="testP" id="testP">{photos[0].id}</p> */}
                {!loading &&  photos.length > 0 && 
                    <PhotoGallery endLoading={endLoading} loadPhotos={() => loadPhotos(query, setPhotos, setEndLoading)} photos={photos} />
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