import React, { useEffect, useState} from 'react';
import {getPhotos} from '../utils/api';
import {Row, Col, Container, Spinner} from 'reactstrap';
import PhotoGallery from '../components/PhotoGallery';

let count = 0

const MainContent = (props) => {
    
    const {match} = props;
    // const query = match.params.query ? match.params.query : ""
    const [query, setQuery] = useState("")
    const [photos, setPhotos] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [endLoading, setEndLoading] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const loader = React.useRef();
    //const queryRef = React.useRef(query);
    
    const loadPhotos = async () => {
        count += 1
       // setIsLoading(true)
        if(count === totalPages) {
            setEndLoading(true);
            return
        }else {
            getPhotos({query: match.params.query, page_start: count})
                .then(res => {
                    setPhotos(state => [...state, ...res.results]);
                    count === 1 && setTotalPages(res.total_pages);
                
                });
           // setIsLoading(false)
        }
    }

   

    useEffect(() => {
        if(match.params.query !== query){
            setPhotos([]);
            setQuery(match.params.query)
            console.log('clean photos Array')
            //setIsLoading
            // fetchData()  
        }else {
            
        }
    }, [match.params.query])

    useEffect(() => {
        if(query !== ""){
            const handleObserver = async (entities) => {
                const target = entities[0];
                console.log(entities)
              
                if (target.isIntersecting) {   
                    console.log('loadPhotos Observer Lazy');
                    loadPhotos();
                }
            }
            var options = {
                root: null,
                rootMargin: "5px",
                threshold: 1.0
            };
            const observer = new IntersectionObserver(handleObserver, options);
            if (loader.current) {
                observer.observe(loader.current);
                // console.log(loader.current)
            }
            //console.log(queryRef)
        }
        
    }, [query])
    

   /*  useEffect(() => {
        if(query !== ""){
            const fetchData = async () => {
                setIsLoading(true);
                setPhotos([]);
                count=0
                await loadPhotos();
                setIsLoading(false)
                console.log('initial fetchdata')
            }
            fetchData()    
        }
    },[query])  */

    

    return (
        <Container fluid>
             <Row>
                {!loading &&  photos.length > 0 && 
                    <PhotoGallery endLoading={endLoading} loadPhotos={loadPhotos} photos={photos} />
                }
                {!loading &&  photos.length === 0 && 
                    <Col col={12}><h6>Nessun risultato trovato per: <i>{query}</i></h6></Col>
                }
                {/*  photos.length > 0 && */
                    <div className="m-auto"  ref={loader}>
                        {loading && <Spinner animation="border" variant="info" />}
                    </div>
                }
            </Row>
        </Container>
    );
};

export default MainContent;