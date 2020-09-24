import React, { useEffect, useRef } from 'react';
import Photo from './Photo';
import {Spinner} from 'reactstrap';


const PhotoGallery = (props) => {
    
    const {photos, loadPhotos, endLoading} = props;
    const loader = useRef(null);
    
    useEffect(() => {
        const handleObserver =  (entities) => {
            const target = entities[0];
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
        if (loader.current && photos.length > 0) {
            observer.observe(loader.current);
        }
    },[photos.length, loadPhotos])

   
    
    return (
        <>
            {photos.map((photo, i) => 
                <Photo key={`${photo.id}-${i}`} photo={photo} /> 
            )}
            {!endLoading &&
                <div className="m-auto" ref={loader}>
                    <Spinner animation="border" variant="info" />
                </div>
            }
        </>
    );
};

export default PhotoGallery;