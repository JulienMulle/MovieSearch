const axios = require("axios").default;

import {
    TMDB_BASE_URL,
    TMDB_API_KEY,
    TMDB_IMAGE_BASE_URL,
    ENDPOINTS,
} from '../constant/Urls';

const TMDB_HTTP_REQUEST = axios.create({
    baseURL: TMDB_BASE_URL,
    params: {
       api_key : TMDB_API_KEY
    }
});