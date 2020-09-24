import React, { useEffect, useState} from 'react';
import {getPhotos} from '../utils/api';
import {Row, Col, Container} from 'reactstrap';
import PhotoGallery from '../components/PhotoGallery';

let count = 0

const MainContent = (props) => {
    
    const {match} = props;
    const query = match.params.query ? match.params.query : ""
    const [photos, setPhotos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [endLoading, setEndLoading] = useState(false);
    const [loading, setIsLoading] = useState(false);
 
   
    const loadPhotos = () => {
        count += 1
        if(count === totalPages) {
            setEndLoading(true);
            return
        }else {
            return getPhotos({query, page_start: count})
                .then(res => {
                    setPhotos(state => [...state, ...res.results]);
                    count === 1 && setTotalPages(res.total_pages);
                });
        }
    }

   
    

    useEffect(() => {
        if(query !== ""){
            const fetchData = async () => {
                setIsLoading(true);
                setPhotos([]);
                count = 0;
                await loadPhotos();
                setIsLoading(false)
                console.log('fetchdata')
            }
            fetchData()    
        }
    },[query])

    

    return (
        <Container fluid>
             <Row>
                {!loading &&  photos.length > 0 && 
                    <PhotoGallery endLoading={endLoading} loadPhotos={loadPhotos} photos={photos} />
                }
                {!loading &&  photos.length === 0 && 
                    <Col col={12}><h6>Nessun risultato trovato per: <i>{query}</i></h6></Col>
                }
            </Row>
        </Container>
    );
};

export default MainContent;