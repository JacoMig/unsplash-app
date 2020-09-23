import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
    secret: process.env.REACT_APP_SECRET_KEY,
    headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
    }),
    timeout: 500
});

export const getPhotos = (options) => {
    //console.log(process.env.REACT_APP_ACCESS_KEY)
    const request = unsplash.search.photos(options.query, options.page_start, 12 ,{ orientation: "landscape" }).then(toJson)
    return request
    
}