import React, { useEffect, useState, useRef, useContext } from 'react';
import Photo from './Photo';
import {Row, Spinner} from 'reactstrap';
const loaderStyle = {
    margin: '0 auto',
}


const PhotoGallery = (props) => {
    
    const {photos, loadPhotos} = props;
    const loader = useRef(null);
    
    const handleObserver =  (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            console.log('loadPhotos Observer Lazy')
            loadPhotos()
        }
    }

    useEffect(() => {
        var options = {
            root: null,
            rootMargin: "5px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current && photos.length > 0) {
            observer.observe(loader.current)
        }
    },[])
    
    return (
        <>
            {photos.map((photo) => <Photo key={photo.id} photo={photo} /> )}
            {
                <div className="loading mt-4" ref={loader}>
                    <Spinner  style={loaderStyle} animation="border" variant="info" />
                </div>
            }
        </>
    );
};

export default PhotoGallery;