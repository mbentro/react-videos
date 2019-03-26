import axios from 'axios';

const API_KEY = 'AIzaSyCLM8KJ5uOF6ixkTxC2-OYDfY-OvJWzRFE';

// From tutorial, but not making use. Unless I get stuck. (lecture 113)
// Have not installed axios into this project

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});
