import axios from 'axios';

const KEY = 'AIzaSyDyBOv9zKnZQBshrmz4sgFBjjaGIO_eV2M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 11,
        key: KEY
    }
});