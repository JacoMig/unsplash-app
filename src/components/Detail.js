import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Card, CardBody, CardImg, CardSubtitle, CardTitle, Spinner} from 'reactstrap';

const Detail = ({photo}) => {
    
    const date = new Date(photo.created_at);
    const [isImgLoaded, setIsImgLoaded] = useState(false);

    const loadImage = (e) => {
        setIsImgLoaded(true)
    }

    return (
        <Card>
            { !isImgLoaded &&
               <div className="text-center img-placeholder">
                   <Spinner animation="border" variant="info" />
               </div>
            }
            {photo.urls.full && 
                <CardImg 
                    className={`${isImgLoaded ? 'fade-in' : ''}`} 
                    onLoad={loadImage} 
                    src={photo.urls.full} 
                    alt={photo.alt_description} /> 
            }
            <CardBody className={`${!isImgLoaded ? 'pt-250' : ''}`}>
                <CardTitle className="mb-5">
                    {photo.alt_description && <h4>{photo.alt_description}</h4> }
                </CardTitle>
                <CardSubtitle>
                    <span className="icon"><FontAwesomeIcon icon="user" /></span>
                    <a rel="noopener noreferrer" target="_blank" href={photo.user.links.html}>
                        <span className="pr-2">{photo.user.first_name} {photo.user.last_name}</span>
                        
                    </a>
                </CardSubtitle>
                <div className="mt-4 d-flex">
                    <span className="icon"><FontAwesomeIcon icon="calendar-alt" /></span>
                    <span>{date && (`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)}</span>
                </div>
                {photo.likes > 0 && 
                    <div className="mt-4 d-flex">
                        <span className="icon"><FontAwesomeIcon icon="thumbs-up" /></span>
                        <span>{photo.likes}</span>
                    </div>
                }
                {photo.tags.length > 0 &&
                    <div className="mt-4">
                        <span className="icon"><FontAwesomeIcon icon="tags" /></span>
                        {photo.tags.map((tag, i) => <span key={`${tag.title}-${i}`} className="pr-2 d-inline-block">{tag.title}</span>)}
                    </div>
                }
            </CardBody>
        </Card>
        
    );
};

export default Detail;