import React, { useEffect, useState, useRef, useContext } from 'react';
import {getPhotos} from '../utils/api';
import {Row} from 'reactstrap';
import PhotoGallery from '../components/PhotoGallery';



 let count = 0
const MainContent = (props) => {
    
   
    const {history, match} = props;
    const query = match.params.query ? match.params.query : ""
    const [photos, setPhotos] = useState([]);
   // const loader = useRef(null);
  
    const [loading, setIsLoading] = useState(false);
 
   
    const loadPhotos = () => {
        count += 1
        return getPhotos({query, page_start: count})
            .then(res => {
                setPhotos(state => [...state, ...res.results]);
                console.log(count)
           
            });
    }



    useEffect(() => {
        if(query !== ""){
            async function fetchData() {
                setIsLoading(true);
                setPhotos([]);
                count = 0
                const response = await loadPhotos()
                setIsLoading(false)
                console.log('fetchdata')
            }
            fetchData()    
        }
        
    },[query])

   

    return (
        <div>
             <Row>
                {!loading &&  photos.length > 0 && 
                    <PhotoGallery loadPhotos={loadPhotos} photos={photos} />
                }
            </Row>
        </div>
    );
};

export default MainContent;