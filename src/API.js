import axios from 'axios';
const API_KEY = '28438794-f29eee1d756bb29e2deebcb2e';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const FetchSearch = async(value, page) => {
    const response = await axios.get(
        `?q=${value}&page=${page}&key=${API_KEY}&orientation=horizontal&per_page=12`
    );  
    const responseData = await response.data;
    if (!responseData.total) {
        return Promise.reject(new Error(`No image with name ${value}`));
    }
    return responseData;
}

