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
    const request = unsplash.search.photos(options.query, options.page_start, 12 ,{ orientation: "landscape" }).then(toJson)
    return request
}

export const getPhoto = (options) => {
    const request = unsplash.photos.getPhoto(options.id).then(toJson)
    return request
}